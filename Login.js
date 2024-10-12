// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const loginstyle = {
    position: 'relative',
    padding: '200px',
    textAlign: 'center',
    backgroundImage: 'url("https://w0.peakpx.com/wallpaper/59/567/HD-wallpaper-web-designing-training-in-pune-web-design-web-design-training-in-pune-website-design-training-web-development-course-in-pune-web-development-training-in-india-website-design-training-in-india.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Change to 100vh to cover the full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Logging in with username: ${username}`);
    // After successful login, navigate to Home page
    localStorage.setItem('isLoggedIn', 'true'); // Set login status
    navigate('/');
  };

  return (
    <div style={loginstyle}>
      <section style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ margin: '10px', padding: '10px', width: '200px' }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ margin: '10px', padding: '10px', width: '200px' }}
          />
          <br />
          <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Login</button>
        </form>
        <br />
        <p>If you don't have an account? <Link to="/signup" style={{ color: 'blue', textDecoration: 'underline' }}>Sign up here</Link></p>
      </section>
    </div>
  );
}

export default Login;
