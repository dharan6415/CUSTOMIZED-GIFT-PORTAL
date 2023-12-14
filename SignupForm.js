// SignupForm.js
import React, { useState } from 'react';
import './Form.css';

const SignupForm = ({ onSignup, onToggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
       alert(`User ${username} signed up successfully!`);
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Signup</button>
        <p className="toggle-link" onClick={onToggleForm}>
          <b>Already have an account? Login</b>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
