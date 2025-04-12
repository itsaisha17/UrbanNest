import React, { useState, useEffect } from "react";

const PlantDiseaseDetector: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string>("");
  const [llamaAdvice, setLlamaAdvice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];
      setFile(e.target.files[0]);
      setPrediction("");
      setLlamaAdvice("");

      const preview = URL.createObjectURL(selectedFile);
      setPreviewUrl(preview);
    }
  };

  const handlePredict = async () => {
    if (!file) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.predicted_class) {
        setPrediction(`✅ Predicted Disease: ${data.predicted_class}`);
        setLlamaAdvice(data.llama_advice || "No advice received.");
      } else {
        setPrediction(`❌ Error: ${data.error}`);
        setLlamaAdvice("");
      }
    } catch (err) {
      setPrediction("❌ Error: Could not connect to server.");
      setLlamaAdvice("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          🌿 Plant Disease Predictor
        </h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
        />

          {previewUrl && (
          <div className="mb-4 text-center">
            <img
              src={previewUrl}
              alt="Plant Preview"
              className="mx-auto w-48 h-48 object-cover border border-gray-300 rounded-lg shadow"
            />
          </div>
        )}
        
        <button
          onClick={handlePredict}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Predict
        </button>

        <div className="mt-6">
          {loading && <p className="text-yellow-600 font-medium text-center">🔄 Predicting...</p>}
          {prediction && (
            <p className="text-green-800 text-center font-semibold mb-2">{prediction}</p>
          )}
          {llamaAdvice && (
            <div className="bg-green-50 border border-green-200 p-3 rounded-md text-sm text-gray-800 whitespace-pre-line">
              <strong className="block text-green-700 mb-1">🌱 Treatment Recommendation:</strong>
              {llamaAdvice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantDiseaseDetector;
