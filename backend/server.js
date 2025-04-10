const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/', postRoutes)

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// 👉 Add this route
app.get('/api/db-info', (req, res) => {
  const dbName = mongoose.connection.name;
  res.json({ dbName });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
