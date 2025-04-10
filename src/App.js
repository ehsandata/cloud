import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    axios.get('https://app.mojtabaonline.me/check-db')
      .then(res => {
        setStatus(`✅ MongoDB is ${res.data.status}`);
      })
      .catch(() => {
        setStatus('❌ Failed to connect to MongoDB');
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>MongoDB Connection Status</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;
