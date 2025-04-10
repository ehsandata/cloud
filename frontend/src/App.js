import React, { useEffect, useState } from 'react';

function App() {
  const [dbName, setDbName] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/db-info`)
      .then(res => res.json())
      .then(data => {
        setDbName(data.dbName);
      })
      .catch(err => {
        console.error('Failed to fetch DB name:', err);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to the App 🎉</h1>
      {dbName && (
        <p style={{ color: 'green' }}>
          ✅ Connected to database: <strong>{dbName}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
