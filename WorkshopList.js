import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WorkshopList() {
  const [workshops] = useState([
    { title: 'React for Beginners', date: 'Oct 10, 2024' },
    { title: 'Java Spring Boot', date: 'Nov 5, 2024' },
    { title: 'Advanced AWS Services', date: 'Dec 1, 2024' },
  ]);

  const [courses] = useState([
    { id: 1, name: 'React Mastery Course' },
    { id: 2, name: 'Java Spring Boot Advanced' },
    { id: 3, name: 'AWS Cloud Architect' },
  ]);

  // Main container style to align workshops and courses side by side
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundImage: 'url(""D:download (1).jpeg"")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust the height as needed
  };

  // Individual section style (for both workshops and courses)
  const sectionStyle = {
    flex: 1,
    margin: '0 10px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: 'rgba(249, 249, 249, 0.8)', // Semi-transparent background for better readability
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
  };

  // Button style
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    marginTop: '20px',
    display: 'inline-block',
  };

  return (
    <section id="workshops" style={containerStyle}>
      {/* Workshops Section */}
      <div style={sectionStyle}>
        <h2>Upcoming Workshops</h2>
        <ul>
          {workshops.map((workshop, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{workshop.title}</strong> - Date: {workshop.date}
            </li>
          ))}
        </ul>
      </div>

      {/* Courses Section */}
      <div style={sectionStyle}>
        <h2>Available Courses</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id} style={{ marginBottom: '10px' }}>
              <strong>{course.name}</strong>
            </li>
          ))}
        </ul>

        {/* Button to Navigate to Courses */}
        <Link to="/courses" style={buttonStyle}>
          View All Courses
        </Link>
      </div>
    </section>
  );
}

export default WorkshopList;
