import React, { useState } from 'react';
import '../assets/css/Profile.css';
import Navbar from './Navbar';

const Profile = ({ user }) => {
  const [isEditing, setEditing] = useState(false);

  const userData = {
    fullName: 'Sahanadevi p',
    email: 'sahana@gmail.com',
    mobileNumber: '9600768691',
  };

  const [editedUser, setEditedUser] = useState({ ...userData, ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    console.log('Saving changes:', editedUser);
    setEditing(false);
  };

  return (
    <>
    <Navbar/>
    <div className="profile-container">
    <img src='https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg' style={{height:'15rem',width:'15rem',marginLeft:'3rem'}}/>
      <h1 style={{marginTop:0}}>User Profile</h1>
      <form>
        <div className="field-box">
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="edit-input"
            type="text"
            id="fullName"
            name="fullName"
            value={editedUser.fullName}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-box">
          <label htmlFor="email">Email:</label>
          <input
            className="edit-input"
            type="email"
            id="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-box">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            className="edit-input"
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={editedUser.mobileNumber}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        {isEditing ? (
          <button className="save-button" type="button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit-button" type="button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </form>
    </div>
    </>
  );
};

export default Profile;