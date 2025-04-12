from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MongoDB URI for connecting to the Atlas cluster
MONGO_URI = 'mongodb+srv://user:user@clustermain.bfyvu0l.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMain'

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["agricultureDB"]  # Name of your database
collection = db["sensorData"]  # Name of your collection

@app.route('/carbon_points', methods=['GET'])
def get_carbon_points():
    # Fetch the latest CO2 sensor data
    latest_data = collection.find().sort("timestamp", -1).limit(1)  # Get the most recent data
    
    # If there's data available, calculate the carbon points
    for data in latest_data:
        co2_level = data["air_quality"]  # Assuming the "air_quality" field contains CO2 levels
        carbon_points = calculate_carbon_points(co2_level)
        return jsonify({"carbon_points": carbon_points})

    # If no data is found, return an error
    return jsonify({"error": "No data found"}), 404

# def calculate_carbon_points(co2_level):
#     # Example logic: 1 carbon point for every 100 ppm of CO2
#     return co2_level // 100
def calculate_carbon_points(co2_level):
    return int(co2_level / 10)  # 10g CO2 = 1 point

if __name__ == '__main__':
    app.run(debug=True)
