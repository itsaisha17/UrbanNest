import React, { useState } from "react";

const SoilQualityPredictor: React.FC = () => {
  const [formData, setFormData] = useState({
    soil_moisture: "",
    soil_temperature: "",
    water_ph: "",
    ambient_temp_avg: "",
    humidity_avg: "",
    rainfall_forecast: "",
    sunlight_days: "0",
    crop_type: "leafy",
  });

  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePredict = async () => {
    setLoading(true);
    setPrediction("");

    try {
      const response = await fetch("http://127.0.0.1:5000/predict-soil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setPrediction(`🌱 Predicted Soil Quality: ${data.predicted_quality}`);
    } catch (error) {
      setPrediction("❌ Error: Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">🧪 Soil Quality Prediction</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Soil Moisture (%)</label>
          <input
            type="number"
            name="soil_moisture"
            value={formData.soil_moisture}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700">Soil Temperature (°C)</label>
          <input
            type="number"
            name="soil_temperature"
            value={formData.soil_temperature}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700">Water pH</label>
          <input
            type="number"
            step="0.1"
            name="water_ph"
            value={formData.water_ph}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700">5-day Avg Ambient Temp (°C)</label>
          <input
            type="number"
            name="ambient_temp_avg"
            value={formData.ambient_temp_avg}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700">5-day Avg Humidity (%)</label>
          <input
            type="number"
            name="humidity_avg"
            value={formData.humidity_avg}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700">Rainfall Forecast (mm)</label>
          <input
            type="number"
            name="rainfall_forecast"
            value={formData.rainfall_forecast}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700">Sunny Days (0–5)</label>
          <input
            type="number"
            name="sunlight_days"
            min="0"
            max="5"
            value={formData.sunlight_days}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-gray-700">Crop Type</label>
          <select
            name="crop_type"
            value={formData.crop_type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="leafy">Leafy</option>
            <option value="root">Root</option>
            <option value="fruiting">Fruiting</option>
          </select>
        </div>

        <button
          onClick={handlePredict}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          Predict Soil Quality
        </button>

        {loading && <p className="text-blue-500 text-center mt-2">🔄 Predicting...</p>}
        {prediction && <p className="text-center text-xl mt-4 font-semibold">{prediction}</p>}
      </div>
    </div>
  );
};

export default SoilQualityPredictor;
