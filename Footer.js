// src/components/Footer.js
import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    marginTop: '20px'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Online Workshops Platform. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
