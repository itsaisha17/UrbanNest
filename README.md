<h1 align="center">
  🌿 VectorCTRL — UrbanNest
</h1>
<h3 align="center">
  Transforming Urban Spaces into Self-Sustaining Organic Food Production Hubs
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/IoT-Enabled-green?style=flat-square&logo=raspberrypi">
  <img src="https://img.shields.io/badge/AI%20powered-yes-blue?style=flat-square&logo=python">
  <img src="https://img.shields.io/badge/Status-Prototype-yellow?style=flat-square">
  <img src="https://img.shields.io/github/license/itsaisha17/UrbanNest?style=flat-square">
</p>

---

## 🌐 Table of Contents

* [Overview](#overview)
* [Problem UrbanNest Solves](#problem-urbannest-solves)
* [Challenges We Ran Into](#challenges-we-ran-into)
* [Features](#features)
* [Use Cases](#use-cases)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
* [System Architecture](#system-architecture)
* [Screenshots](#screenshots)
* [Team](#team)
* [Learnings & Takeaways](#learnings--takeaways)
* [Future Scope](#future-scope)
* [License](#license)

---

## 📌 Overview

**UrbanNest** is an AI-powered terrace farming solution that tackles food insecurity, environmental degradation, and urban inaccessibility to fresh produce. By integrating AI, IoT sensors, and solar energy, it empowers users to convert rooftops into intelligent, organic food production hubs.

> 🌱 Grow smarter. Eat fresher. Live greener.

---

## 🧩 Problem UrbanNest Solves

Urban areas face escalating challenges in food security, environmental sustainability, and climate resilience due to rapid urbanization, pollution, and inefficient resource management. Key statistics and pain points include:

🏙️ **Underutilized Terrace Spaces**: In India, a large percentage of urban households don’t leverage terrace spaces for productive use like farming.

🧪 **Health Risks from Chemically Treated Produce**: Urban populations largely consume pesticide-laden food, contributing to weakened immunity, hormonal imbalances, and chronic illnesses.

🌳 **Lack of Green Spaces & Local Food Systems**: Cities are rapidly losing their green cover while relying heavily on distant, unsustainable supply chains.

**UrbanNest** addresses these issues by transforming urban rooftops into AI-powered organic farms, reducing reliance on external food sources while improving community health and sustainability.

---

## ⚠️ Challenges We Ran Into

While building UrbanNest, our team tackled a variety of technical and conceptual challenges:

⚙️ **Sensor Integration Issues**: Calibrating multiple sensors (CO₂, pH, soil moisture) for consistent real-time readings was tricky. We overcame this through firmware updates and environment-specific threshold tuning.

🧠 **AI Plant Disease Detection**: Achieving reliable plant health diagnostics using mobile camera feeds was difficult due to varied lighting and plant stages. We mitigated this by training our CNN on a diverse, augmented dataset with OpenCV preprocessing.

🔋 **Solar Panel Optimization**: Getting servo-controlled sun-tracking to function accurately with live weather updates required fine-tuning algorithms for motion thresholds and weather data smoothing.

🔌 **Real-time Data Sync**: Ensuring smooth communication between sensors, Firebase, and the dashboard was a hurdle. We resolved latency issues by optimizing Firebase listeners and restructuring API calls.

📱 **User Experience Consistency**: Making the dashboard responsive across devices and browsers involved deep testing and Tailwind-based UI refactoring.

Every roadblock sharpened our solution—and brought us one step closer to a fully autonomous, smart farming system for cities.

---

## ⚙️ Features

* 🔍 **Smart Sensor Integration**
  Real-time monitoring of soil moisture, temperature, humidity, CO₂, pH, and turbidity.

* 💧 **Predictive Water & Disinfection Management**
  AI-optimized irrigation and UV-C-based disinfection for efficient water usage.

* 🌿 **AI Plant Health Monitoring**
  Detect diseases and nutrient issues via camera + AI model.

* 🔋 **Adaptive Solar Energy System**
  Sun-tracking panels for sustainable energy usage.

* 📊 **User-Friendly Dashboard**
  Web/mobile UI to visualize data and manage farms.

* 🤖 **AI Chatbot**
  Personalized farming assistant for growers of all levels.

* ♻️ **Organic Waste Recycling**
  Integrated composting and waste reuse guidance.

---

## 🏡 Use Cases

* 👨‍👩‍👧‍👦 **Households** – Grow organic vegetables with zero pesticides.
* 🍽️ **Restaurants & Cafés** – Own fresh, in-house supply of herbs and greens.
* 🏫 **Schools & Communities** – Educational and sustainable farming spaces.
* 🏙️ **Smart Cities** – Scalable model for green urban development.

---

## 🧠 Technologies Used

### 🔧 Software Stack

* **Frontend**: React, TailwindCSS
* **Backend**: FastAPI
* **Realtime DB & Auth**: Firebase
* **AI/ML**: OpenCV, Llama 3.2 90b, CNN, LSTM
* **APIs**: OpenWeatherAPI

### ⚙️ Hardware Stack

* **Microcontrollers**: Raspberry Pi, ESP8266
* **Sensors**: MG-811 (CO₂), DHT-22 (Temp/Humidity), pH, Turbidity, Soil Moisture
* **Actuators**: Servo Motors
* **Disinfection**: UV-LEDs
* **Power Supply**: Adaptive Sun-Tracking Solar Panels

---

## 🚀 Getting Started

### 📦 Prerequisites

* Node.js
* Python 3.8+
* Raspberry Pi OS

### 🛠️ Installation Steps

```bash
# Clone the Repository
git clone https://github.com/itsaisha17/UrbanNest.git
cd UrbanNest
```

#### 🧠 Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

#### 🎨 Frontend Setup

```bash
cd ../frontend
npm install
```

#### ⚙️ Environment Variables

Copy `.env.example` to `.env` and update with your Firebase & OpenWeather API keys.

#### 🚦 Running the App

```bash
# Backend
python manage.py runserver

# Frontend
npm start
```

#### 🔌 Hardware Setup

* Connect sensors and actuators as per [System Architecture](#system-architecture).
* Flash microcontroller scripts from `hardware/`.

---

## 🧭 System Architecture

```
UrbanNest/
├── backend/
│   ├── api/
│   ├── ml_models/
│   └── database/
├── frontend/
│   ├── components/
│   └── pages/
├── hardware/
│   ├── microcontroller/
│   └── sensor_drivers/
└── docs/
```

### 🔁 Data Flow

1. Sensors collect environmental + soil data.
2. Microcontrollers push data to backend APIs.
3. AI/ML modules process and return smart decisions.
4. UI displays insights; chatbot assists user.
5. Solar panel system powers components intelligently.

---

## 📸 Screenshots

### 🔬 Plant Disease Detection Module
![e10a06a8-825f-4447-bf2b-685a64a07cbc](https://github.com/user-attachments/assets/2a6eb22c-873a-42c6-ad85-871c04e7ce29)



### 📊 Smart Farming Dashboard

![491b7242-9650-426c-ae2a-508d2eec372f](https://github.com/user-attachments/assets/98457d48-378f-4bef-bbfa-23374b113c28)


---

## 👥 Team

| Member           | Role                                  |
| ---------------- | ------------------------------------- |
| **Ayesha Bhatt** | AI/ML, IoT Integration, Backend Lead  |
| **Vaishnavi**    | UI/UX, Frontend Dev, Research Analyst |

---

## 🎓 Learnings & Takeaways

* Learned to integrate real-time IoT data with AI inference workflows.
* Understood system reliability and power efficiency tradeoffs.
* Improved UI/UX testing and responsive design for IoT dashboards.
* Deepened experience with sensor calibration and hardware programming.
* Team collaboration across roles led to faster iteration and robust debugging.

---

## 🔮 Future Scope

* 🌾 Add hydroponic support modules for water-efficient farming.
* 📦 Launch a companion mobile app with voice assistant features.
* 🔄 Integrate blockchain for supply chain traceability.
* 🌐 Expand to community-level farming network with dashboard insights.
* ☁️ Deploy full-stack version on cloud for remote access and monitoring.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

> “Let rooftops bloom with intelligence — the future of food is just above us.” 🌞🌾
