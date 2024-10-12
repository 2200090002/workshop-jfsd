// src/components/Courses.js
import React from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  const courses = [
    { id: 1, name: 'React Mastery Course', description: 'Master React and become an expert in front-end development.', content: 'Detailed course content for React Mastery...' },
    { id: 2, name: 'Java Spring Boot Advanced', description: 'Take your Java skills to the next level with Spring Boot.', content: 'Detailed course content for Java Spring Boot...' },
    { id: 3, name: 'AWS Cloud Architect', description: 'Become an expert in AWS and cloud architecture.', content: 'Detailed course content for AWS Cloud Architect...' },
  ];

  // Styles for the main container of courses
  const coursesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
  };

  // Styles for the individual course container (side by side)
  const courseContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    gap: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const leftColumnStyle = {
    flex: '1',
    padding: '10px',
  };

  const rightColumnStyle = {
    flex: '2',
    padding: '10px',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '20px',
  };

  const contentStyle = {
    fontSize: '1rem',
    color: '#444',
  };

  const linkStyle = {
    marginTop: '20px',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={coursesContainerStyle}>
      <h2>Available Courses</h2>
      
      {courses.map((course) => (
        <div key={course.id} style={courseContainerStyle}>
          {/* Left Column: Course Name and Description */}
          <div style={leftColumnStyle}>
            <h3 style={headingStyle}>{course.name}</h3>
            <p style={descriptionStyle}>{course.description}</p>
          </div>

          {/* Right Column: Course Content */}
          <div style={rightColumnStyle}>
            <h4>Course Content</h4>
            <p style={contentStyle}>{course.content}</p>

            {/* Link to Course Details */}
            <Link to={`/courses/${course.id}`} style={linkStyle}>
              View Course Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
