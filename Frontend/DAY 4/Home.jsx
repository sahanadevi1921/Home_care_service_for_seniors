import React from 'react';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome To The Homecare Service</h1>
      <div className="button-container">
        <button className="admin-button"><Link to='/Alogin'>
          Admin
          </Link>
          </button>
        <button className="user-button"><Link to='/HomePages'>
          User
          </Link>
          </button>
      </div>
    </div>
  );
};

export default Home;