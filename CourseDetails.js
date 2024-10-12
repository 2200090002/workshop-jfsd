import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CourseDetails() {
  const courseDetailsStyle = {
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

  const { courseId } = useParams(); // Retrieve courseId from the route parameters
  const navigate = useNavigate(); // Hook for programmatic navigation

  const courses = [
    { id: 1, name: 'React Mastery Course', description: 'Master React and become an expert in front-end development.', content: 'Detailed course content for React Mastery...' },
    { id: 2, name: 'Java Spring Boot Advanced', description: 'Take your Java skills to the next level with Spring Boot.', content: 'Detailed course content for Java Spring Boot...' },
    { id: 3, name: 'AWS Cloud Architect', description: 'Become an expert in AWS and cloud architecture.', content: 'Detailed course content for AWS Cloud Architect...' },
  ];

  // Find the course by its ID
  const course = courses.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <h2>Course not found!</h2>;
  }

  // Styles for the side-by-side layout
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
  };

  const columnsContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  };

  const leftColumnStyle = {
    flex: '1',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const rightColumnStyle = {
    flex: '2',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  };

  const contentStyle = {
    fontSize: '1rem',
    color: '#444',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    alignSelf: 'center',
  };

  return (
    <div>
      <div style={courseDetailsStyle}>
        <h1>{course.name}</h1>
        <p>Learn more about this course!</p>
      </div>

      <div style={containerStyle}>
        <div style={columnsContainer}>
          {/* Left Column: Course Information */}
          <div style={leftColumnStyle}>
            <h2 style={headingStyle}>{course.name}</h2>
            <p style={descriptionStyle}>{course.description}</p>
          </div>

          {/* Right Column: Detailed Course Content */}
          <div style={rightColumnStyle}>
            <h3>Course Content</h3>
            <p style={contentStyle}>{course.content}</p>
          </div>
        </div>

        {/* Back to Courses Button */}
        <button
          onClick={() => navigate('/courses')}
          style={buttonStyle}
        >
          Back to Available Courses
        </button>
      </div>
    </div>
  );
}

export default CourseDetails;
