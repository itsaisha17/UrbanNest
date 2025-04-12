from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import requests
from flask_cors import CORS
from PIL import Image

app = Flask(__name__)
CORS(app)

# Load your trained model
model = load_model('Prediction/pred/src/Backedn/plant_disease_model.h5')

# Class labels from your training
CLASS_NAMES = ["Tomato_Bacterial_Spot","Tomato_Early_blight","Tomato_Leaf_Mold", "Tomato_Septoria_leaf_spot", "Tomato_Spider_mites_Two_spotted_spider_mite", "Tomato__Target_Spot", "Tomato__Tomato_mosaic_virus", "Tomato_healthy", "Tomato_YellowLeaf_Curl_Virus", "Tomato_Late_Blight", "Pepper__bell___Bacterial_spot", "Pepper__bell___healthy", "Potato___Early_blight", "Potato___Late_blight", "Potato___healthy", ]  # Add your actual classes

# Function to get LLaMA recommendations from Groq API
def get_llama_recommendation(disease_name):
    GROQ_API_KEY = "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"  # Replace with your actual key
    endpoint = "https://api.groq.com/openai/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    system_message = {
        "role": "system",
        "content": (
            "You are a helpful farming assistant. When given a plant disease name, respond in 4–5 lines. "
            "Explain the problem simply, and give both organic and chemical treatment methods in easy language."
        )
    }

    user_message = {
        "role": "user",
        "content": f"My plant has {disease_name.replace('_', ' ')}. What should I do to treat it?"
    }

    data = {
        "model": "llama3-8b-8192",  # or use "llama3-70b-8192"
        "messages": [system_message, user_message],
        "temperature": 0.7
    }

    try:
        response = requests.post(endpoint, headers=headers, json=data)
        if response.status_code == 200:
            return response.json()['choices'][0]['message']['content']
        else:
            return "⚠️ LLaMA failed to respond. Please try again later."
    except Exception as e:
        return f"⚠️ Error contacting LLaMA: {str(e)}"

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "Empty filename"}), 400

    try:
        img = Image.open(file.stream).resize((128, 128))
        img_array = image.img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)
        class_index = int(np.argmax(prediction))
        class_name = CLASS_NAMES[class_index]

        recommendation = get_llama_recommendation(class_name)

        return jsonify({
            "predicted_class": class_name.replace("_", " "),
            "llama_advice": recommendation
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
