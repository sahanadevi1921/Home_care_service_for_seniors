import React from 'react';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome To The Homecare Service</h1>
      <div className="button-container">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    className="admin-button"
    style={{
      color: 'blue', // Text color
      backgroundColor: 'lightblue', // Background color
      border: '1px solid blue', // Border color
      padding: '10px 20px', // Adjust padding as needed
      margin: '5px', // Adjust margin as needed
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
    }}
  >
    <Link to='/Alogin' style={{ textDecoration: 'none', color: 'inherit' }}>
      Admin
    </Link>
  </button>

  <button
    className="user-button"
    style={{
      color: 'green', // Text color
      backgroundColor: 'lightgreen', // Background color
      border: '1px solid green', // Border color
      padding: '10px 20px', // Adjust padding as needed
      margin: '5px', // Adjust margin as needed
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
    }}
  >
    <Link to='/Front' style={{ textDecoration: 'none', color: 'inherit' }}>
      User
    </Link>
  </button>
</div>




      </div>
    </div>
  );
};

export default Home;