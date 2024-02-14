import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Homes.css'; 
import Navbar from './Navbar';
function Frame() {
    return (
        <>
        <Navbar/>
        <div className="home-page">
            <h1>Welcome to Our Website</h1>
            
        </div>
        </>
    );
}

export default Frame;