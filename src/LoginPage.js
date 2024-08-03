// src/LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'passworld1') {
      setMessage('Hey! beni aramışsım şimdi fark ettim');
    } else if (password === 'passworld2') {
      setMessage('kendimi kaptırmışım. gpt ile bir sürü şey deniyorum. gpt yazıyor ben de okuyup anlamaya çalışıyorum.');
    } else {
      setMessage('Incorrect password');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{ padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Login</button>
      </form>
      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
};

export default LoginPage;
