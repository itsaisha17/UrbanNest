
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
- [Overview](#overview)  
- [Features](#features)  
- [Use Cases](#use-cases)  
- [Technologies Used](#technologies-used)  
- [Getting Started](#getting-started)  
- [System Architecture](#system-architecture)  
- [Team](#team)  
- [License](#license)

---

## 📌 Overview  

**UrbanNest** is an AI-powered terrace farming solution that tackles food insecurity, environmental degradation, and urban inaccessibility to fresh produce. By integrating AI, IoT sensors, and solar energy, it empowers users to convert rooftops into intelligent, organic food production hubs.

> 🌱 Grow smarter. Eat fresher. Live greener.

---

## ⚙️ Features  

- 🔍 **Smart Sensor Integration**  
  Real-time monitoring of soil moisture, temperature, humidity, CO₂, pH, and turbidity.

- 💧 **Predictive Water & Disinfection Management**  
  AI-optimized irrigation and UV-C-based disinfection for efficient water usage.

- 🌿 **AI Plant Health Monitoring**  
  Detect diseases and nutrient issues via camera + AI model.

- 🔋 **Adaptive Solar Energy System**  
  Sun-tracking panels for sustainable energy usage.

- 📊 **User-Friendly Dashboard**  
  Web/mobile UI to visualize data and manage farms.

- 🤖 **AI Chatbot**  
  Personalized farming assistant for growers of all levels.

- ♻️ **Organic Waste Recycling**  
  Integrated composting and waste reuse guidance.

---

## 🏡 Use Cases  

- 👨‍👩‍👧‍👦 **Households** – Grow organic vegetables with zero pesticides.  
- 🍽️ **Restaurants & Cafés** – Own fresh, in-house supply of herbs and greens.  
- 🏫 **Schools & Communities** – Educational and sustainable farming spaces.  
- 🏙️ **Smart Cities** – Scalable model for green urban development.

---

## 🧠 Technologies Used  

### 🔧 Software Stack  
- **Frontend**: React, TailwindCSS  
- **Backend**: FastAPI  
- **Realtime DB & Auth**: Firebase  
- **AI/ML**: OpenCV, Llama 3.2 90b, CNN, LSTM  
- **APIs**: OpenWeatherAPI  

### ⚙️ Hardware Stack  
- **Microcontrollers**: Raspberry Pi, ESP8266  
- **Sensors**: MG-811 (CO₂), DHT-22 (Temp/Humidity), pH, Turbidity, Soil Moisture  
- **Actuators**: Servo Motors  
- **Disinfection**: UV-LEDs  
- **Power Supply**: Adaptive Sun-Tracking Solar Panels

---

## 🚀 Getting Started  

### 📦 Prerequisites  
- Node.js  
- Python 3.8+  
- Raspberry Pi OS  

### 🛠️ Installation Steps

```bash
# Clone the Repository
git clone https://github.com/itsaisha17/UrbanNest.git
cd UrbanNest
````

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

## 👥 Team

| Member           | Role                                  |
| ---------------- | ------------------------------------- |
| **Ayesha Bhatt** | AI/ML, IoT Integration, Backend Lead  |
| **Vaishnavi**    | UI/UX, Frontend Dev, Research Analyst |

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

> “Let rooftops bloom with intelligence — the future of food is just above us.” 🌞🌾

```

---

### 🔧 Suggestions for You:

- Add visuals: Upload and embed screenshots or a GIF demo under a `📸 Screenshots` section.
- Pin this repo on your GitHub profile.
- Add relevant topics/tags in the repo settings like `AI`, `IoT`, `Urban Farming`, `Smart Agriculture`.

Want me to make a custom banner for the top? Or embed a walkthrough video link if you have one? Let me know!
```
