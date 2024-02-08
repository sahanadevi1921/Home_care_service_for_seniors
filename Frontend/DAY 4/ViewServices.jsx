import React, { useState } from 'react';
import '../assets/css/AllBooking.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function ViewServices() {
    const [bookings, setBookings] = useState([
        // Your bookings data here
        { id: 1, serviceType: 'Acservice', Description: 'All ac can service', date: '2024-02-10', time: '10:00 AM', charges: '20$' },
        { id: 2, serviceType: 'AudioService', Description: 'All audio can service', date: '2024-02-12', time: '2:00 PM', charges: '30$' },
        // Add more bookings as needed
    ]);

    return (
        <>
            <Navbar />
            <div className="view-bookings-page">
                <h1>View Service</h1>

                <div className="booking-list">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Service Type</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.id}</td>
                                    <td>{booking.serviceType}</td>
                                    <td>{booking.Description}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>{booking.charges}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ViewServices;

