const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB.'))
  .catch((err) => console.error('❌ Failed to connect to MongoDB:', err));

// Simple route to check connection
app.get('/check-db', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.json({ status: 'connected' });
  } else {
    res.status(500).json({ status: 'not connected' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
