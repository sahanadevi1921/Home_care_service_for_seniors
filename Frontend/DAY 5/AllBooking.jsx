// src/components/ViewBookings.jsx
import React, { useState } from 'react';
import '../assets/css/AllBooking.css';
import Anavbar from './Anavbar';

function AllBooking() {
    const [bookings, setBookings] = useState([
        // Your bookings data here
        { id: 1, serviceName: 'Service 1', user: 'User 1', date: '2024-02-10', time: '10:00 AM' },
        { id: 2, serviceName: 'Service 2', user: 'User 2', date: '2024-02-12', time: '2:00 PM' },
        // Add more bookings as needed
    ]);

    return (
        <>
        <Anavbar/>
        <div className="view-bookings-page">
            <h1>View Bookings Page</h1>

            <div className="booking-list">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Service Name</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.serviceName}</td>
                                <td>{booking.user}</td>
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default AllBooking;
