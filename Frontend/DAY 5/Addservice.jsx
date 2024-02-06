// src/components/AddService.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/AddService.css';
import Anavbar from './Anavbar';

function AddService() {
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [extraCharges, setExtraCharges] = useState('');
    const [timing, setTiming] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle the submission of the new service
        console.log('Service Added:', { serviceName, serviceDescription, extraCharges, timing });
        // Simulating a success message by setting isSuccess to true
        setIsSuccess(true);

        // You can implement actual API calls or state management here
    };

    return (
        <>
        <Anavbar/>
        <div className="Addback">
        <div className="add-service">
            <h1>Add New Service</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="serviceName">Service Name:</label>
                <input
                    type="text"
                    id="serviceName"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    required
                />

                <label htmlFor="serviceDescription">Service Description:</label>
                <textarea
                    id="serviceDescription"
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
                    required
                />

                <label htmlFor="extraCharges">Extra Charges:</label>
                <input
                    type="text"
                    id="extraCharges"
                    value={extraCharges}
                    onChange={(e) => setExtraCharges(e.target.value)}
                    required
                />

                <label htmlFor="timing">Timing:</label>
                <input
                    type="text"
                    id="timing"
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                    required
                />

                <button type="submit">Add Service</button><br/><br/>

                {isSuccess && (
                    <div className="success-message">
                        <p>Service details successfully added!</p>
                    </div>
                )}

                {/* Add "Back to Dashboard" link */}
                <Link to="/Homepage">
                    <button type="button"><p style={{ textAlign: 'center', paddingLeft: '220px', paddingRight: '220px' }}>Back to Dashboard</p></button>
                </Link>
            </form>
        </div>
        </div>
    </>
    
    );
}

export default AddService;

