import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Home() {
  const homeStyle = {
    position: 'relative',
    padding: '200px',
    textAlign: 'center',
    backgroundImage: 'url("https://w0.peakpx.com/wallpaper/59/567/HD-wallpaper-web-designing-training-in-pune-web-design-web-design-training-in-pune-website-design-training-web-development-course-in-pune-web-development-training-in-india-website-design-training-in-india.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
  };

  const headingStyle = {
    fontSize: '4rem',
    fontWeight: '900',
    color: '#39ff14', // Neon Green color for the heading
    textShadow: '2px 2px 8px rgba(57, 255, 20, 0.8)', // Adds a glowing effect around the text
    backgroundImage: 'linear-gradient(90deg, #39ff14, #bfff00)', // Neon Green gradient effect
    WebkitBackgroundClip: 'text',
    color: 'transparent', // To apply the gradient within the text
  };

  const paragraphStyle = {
    fontSize: '1.8rem',
    marginBottom: '20px',
    fontWeight: '500',
    color: '#ffdd57', // Golden yellow color for the paragraph
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)', // Adds a slight shadow to paragraph text
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#28a745', // Bright green color for the button
    color: '#ffffff', // White button text
    textDecoration: 'none',
    borderRadius: '10px', // Slightly rounded corners for a modern look
    fontWeight: 'bold',
    boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)', // Drop shadow for the button
    transition: 'background-color 0.3s ease', // Smooth transition effect
  };

  const buttonHoverStyle = {
    backgroundColor: '#218838', // Slightly darker green on hover
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check login status from localStorage
  const buttonDestination = isLoggedIn ? '/courses' : '/signup'; // Navigate to Courses if logged in, else Sign Up

  return (
    <section id="home" style={homeStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Welcome to Your Learning Platform</h2>
        <p style={paragraphStyle}>
          We offer interactive online workshops designed to help you enhance your skills. Learn from industry experts and grow your career!
        </p>
        <Link
          to={buttonDestination}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Explore Workshops
        </Link>
      </div>
    </section>
  );
}

export default Home;
