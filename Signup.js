// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const signupstyle = {
    position: 'relative',
    padding: '200px',
    textAlign: 'center',
    backgroundImage: 'url("https://w0.peakpx.com/wallpaper/59/567/HD-wallpaper-web-designing-training-in-pune-web-design-web-design-training-in-pune-website-design-training-web-development-course-in-pune-web-development-training-in-india-website-design-training-in-india.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Validate passwords
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least one uppercase letter, one number, one symbol, and be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Add your signup logic here (e.g., API call)
    alert(`Signing up with username: ${username}`);

    // After successful signup, navigate to Login page
    navigate('/login');
  };

  return (
    <div style={signupstyle}>
      <section style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
        <h2>Sign Up</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ margin: '10px', padding: '10px', width: '200px' }}
          />
          <br />
          <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Sign Up</button>
        </form>
      </section>
    </div>
  );
}

export default Signup;
