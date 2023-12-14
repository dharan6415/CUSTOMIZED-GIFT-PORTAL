// LoginForm.js
import React, { useState } from 'react';
// import './Form.css';

const LoginForm = ({ onLogin, onToggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLogin(username);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
        <p className="toggle-link" onClick={onToggleForm}>
         <b> Don't have an account? Signup</b>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
