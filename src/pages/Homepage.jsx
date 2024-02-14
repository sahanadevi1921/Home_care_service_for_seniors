// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Homepage.css';
import Anavbar from './Anavbar';
function Homepage() {
    return (
        <>
        <Anavbar/>
        <div className="home-page">
            <h1>Welcome to Our Website</h1>
        </div>
        </>
    );
}

export default Homepage;
