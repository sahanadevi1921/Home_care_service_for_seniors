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
            {/* <p>Explore our services and book an appointment today!</p> */}

            {/* <div className="cta-buttons">
                <Link to="/services">
                    <button className="explore-button">Explore Services</button>
                </Link>
                <Link to="/bookings">
                    <button className="book-now-button">Book Now</button>
                </Link>
            </div> */}
        </div>
        </>
    );
}

export default Homepage;
