// ContactPage.jsx

import React, { useState } from 'react';
import '../assets/css/Contact.css';
import Anavbar from './Anavbar';

const Contact = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEditClick = () => {
    setEditMode(!isEditMode);
  };

  const handleSaveClick = () => {
    // Add logic to save the contact information
    setEditMode(false);
    // Additional logic can be added here, such as sending the form data to a server.
  };

  return (
    <>
    <Anavbar/>
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        {isEditMode ? (
          <>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john@example.com
            </p>
            <p>
              <strong>Message:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </>
        )}
      </div>
      <div className="edit-buttons">
        {isEditMode ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
    </>
  );
};

export default Contact;

