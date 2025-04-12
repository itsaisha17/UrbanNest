from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from flask_cors import CORS
from twilio.rest import Client
import openai
import os

app = Flask(__name__)
CORS(app)

# Load dataset and train model
df = pd.read_csv("Prediction/pred/src/Backedn/soil_quality_simulated_dataset.csv")
X = df.drop("label", axis=1)
y = df["label"]

# Encode labels
label_encoder = LabelEncoder()
y_encoded = label_encoder.fit_transform(y)

# Encode crop type
crop_type_encoder = LabelEncoder()
crop_type_encoder.fit(["leafy", "root", "fruiting"])

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Twilio credentials (replace with your actual info or use environment variables)

TWILIO_WHATSAPP_FROM = 'whatsapp:+14155238886'  # Twilio Sandbox number
USER_WHATSAPP_TO = 'whatsapp:+919717014460'     # Replace with verified WhatsApp number
# --- Groq Cloud Setup (LLaMA 3) ---
openai.api_key = "YOUR_GROQ_API_KEY"
openai.api_base = "https://api.groq.com/openai/v1"
LLAMA_MODEL = "llama3-8b-8192"

client = Client(TWILIO_SID, TWILIO_AUTH_TOKEN)

def send_whatsapp_alert(message):
    client.messages.create(
        from_=TWILIO_WHATSAPP_FROM,
        to=USER_WHATSAPP_TO,
        body=message
    )

def get_fertilizer_recommendation(crop_type):
    prompt = f"The soil quality is poor. What fertilizers should I use to improve it for {crop_type} crops?"
    try:
        response = openai.ChatCompletion.create(
            model=LLAMA_MODEL,
            messages=[
                {"role": "system", "content": "You are an expert in soil health and agriculture."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return "Sorry, I couldn’t fetch fertilizer recommendations right now."

@app.route('/predict-soil', methods=['POST'])
def predict_soil():
    try:
        data = request.get_json()
        input_data = np.array([[ 
            float(data['soil_moisture']),
            float(data['soil_temperature']),
            float(data['water_ph']),
            float(data['ambient_temp_avg']),
            float(data['humidity_avg']),
            float(data['rainfall_forecast']),
            int(data['sunlight_days']),
            crop_type_encoder.transform([data['crop_type']])[0]
        ]])

        prediction = model.predict(input_data)
        predicted_quality = label_encoder.inverse_transform(prediction)[0]

        # 🚨 If soil quality is predicted to be poor, send WhatsApp alert
        if predicted_quality.lower() == "poor":
            send_whatsapp_alert("⚠️ Alert: Soil quality is predicted to become POOR! Please take preventive action to improve the soil condition.")

        return jsonify({'predicted_quality': predicted_quality})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
