// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import WorkshopList from './components/WorkshopList';
import Footer from './components/Footer';
import Login from './components/Login';
import Admin from './components/Admin';
import Signup from './components/Signup';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<WorkshopList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Courses route */}
          <Route path="/courses" element={<Courses />} />

          {/* Course details route with dynamic courseId */}
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
