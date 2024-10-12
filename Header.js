// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  };

  const titleStyle = {
    textAlign: 'center',
    flex: 1,
    fontSize: '24px',
    margin: 0,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '10px',
    left: '20px',
  };

  const rightNavStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '10px',
    right: '20px',
  };

  const linkStyle = {
    margin: '0 20px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/workshops" style={linkStyle}>Workshops</Link>
      </nav>
      <h1 style={titleStyle}>Online Workshops Platform</h1>
      <nav style={rightNavStyle}>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/admin" style={{ margin: '10px', color: 'white' }}>Admin</Link>
        <Link to="/signup" style={linkStyle}>Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;