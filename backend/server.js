const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/cloud-frontend">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


const app = express();
app.use(cors({
  origin: 'https://app.mojtabaonline.me', // Allow frontend domain
}));


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
