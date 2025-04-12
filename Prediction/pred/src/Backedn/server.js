import express from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Connect to the **read-only** MongoDB database
const MONGO_URI = 'mongodb+srv://user:user@clustermain.bfyvu0l.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMain';
connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to remote MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define schema only for reading
const readOnlySchema = new Schema({}, { strict: false }); // Allow all fields
const ExternalData = model('ExternalData', readOnlySchema, 'actualCollectionName');

// Middleware
app.use(cors());
app.use(express.json());

// Fetch-only endpoint
app.get('/api/external-data', async (req, res) => {
  try {
    const data = await ExternalData.find().sort({ timestamp: -1 }).limit(10);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching external data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

