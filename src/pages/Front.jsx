import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Homes.css';
import Unavbar from './Unavbar'; 
function Front() {
    return (
        <>
        <Unavbar/>
        <div className="home-page">
            <h1>Welcome to Our Website</h1>
            
        </div>
        </>
    );
}

export default Front;