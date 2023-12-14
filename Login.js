// Login.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
// import './Form.css';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleToggleForm = () => {
    setShowSignup(!showSignup);
  };
  return (
    <div>
      {loggedInUser ? (
        <div className="form-container">
          <p>Welcome, {loggedInUser}!</p>
          {/* Add redirection or other content for authenticated users */}
        </div>
      ) : showSignup ? (
        <SignupForm onSignup={handleLogin} onToggleForm={handleToggleForm} />
      ) : (
        <LoginForm onLogin={handleLogin} onToggleForm={handleToggleForm} />
      )}
    </div>
  );
};

export default Login;
