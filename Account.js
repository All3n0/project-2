import React, { useState } from 'react';
import Home from './Home';

// SignUp component
const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you would typically call a function to sign up the user
    onSignUp({ username, password });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

// Login component
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically call a function to log in the user
    onLogin({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = (userData) => {
    // Handle sign-up logic here
    console.log('Signed up:', userData);
    setIsLoggedIn(true);
  };

  const handleLogin = (userData) => {
    // Handle login logic here
    console.log('Logged in:', userData);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <>
          <SignUp onSignUp={handleSignUp} />
          <Login onLogin={handleLogin} />
        </>
      )}
    </div>
  );
};

export default Account;
