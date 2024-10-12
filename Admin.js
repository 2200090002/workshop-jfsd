// src/components/Admin.js
import React, { useState } from 'react';

function Admin() {
  // State for managing projects
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [file, setFile] = useState(null);

  // State for managing users
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  // Handle adding a new project
  const handleAddProject = (e) => {
    e.preventDefault();

    if (!newProjectName || !file) {
      alert('Please provide a project name and a file.');
      return;
    }

    const newProject = {
      name: newProjectName,
      file: file.name,
    };

    setProjects([...projects, newProject]);
    setNewProjectName('');
    setFile(null);
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle deleting a project
  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  // Handle adding a new user
  const handleAddUser = (e) => {
    e.preventDefault();

    if (!newUserName || !newUserEmail) {
      alert('Please provide both name and email for the new user.');
      return;
    }

    const newUser = {
      name: newUserName,
      email: newUserEmail,
    };

    setUsers([...users, newUser]);
    setNewUserName('');
    setNewUserEmail('');
  };

  // Handle deleting a user
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel</h2>

      {/* Form to add new projects */}
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="Project Name"
          style={{ padding: '10px', marginRight: '10px' }}
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          style={{ padding: '10px', marginRight: '10px' }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Add Project</button>
      </form>

      {/* List of projects */}
      <h3>Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {project.name} - {project.file}
            <button
              onClick={() => handleDeleteProject(index)}
              style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: 'red', color: 'white' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Form to add new users */}
      <h3>Add New User</h3>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="User Name"
          style={{ padding: '10px', marginRight: '10px' }}
          required
        />
        <input
          type="email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
          placeholder="User Email"
          style={{ padding: '10px', marginRight: '10px' }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Add User</button>
      </form>

      {/* List of users */}
      <h3>Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {user.name} - {user.email}
            <button
              onClick={() => handleDeleteUser(index)}
              style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: 'red', color: 'white' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
