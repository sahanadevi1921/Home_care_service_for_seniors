// src/components/ViewBookings.jsx
// import React, { useState } from 'react';
// import '../assets/css/AllBooking.css';
// import Anavbar from './Anavbar';

// function AllBooking() {
//     const [bookings, setBookings] = useState([
//         // Your bookings data here
//         { id: 1, serviceName: 'Service 1', user: 'User 1', date: '2024-02-10', time: '10:00 AM' },
//         { id: 2, serviceName: 'Service 2', user: 'User 2', date: '2024-02-12', time: '2:00 PM' },
//         // Add more bookings as needed
//     ]);

//     return (
//         <>
//         <Anavbar/>
//         <div className="view-bookings-page">
//             <h1>View Bookings Page</h1>

//             <div className="booking-list">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Service Name</th>
//                             <th>User</th>
//                             <th>Date</th>
//                             <th>Time</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {bookings.map((booking) => (
//                             <tr key={booking.id}>
//                                 <td>{booking.id}</td>
//                                 <td>{booking.serviceName}</td>
//                                 <td>{booking.user}</td>
//                                 <td>{booking.date}</td>
//                                 <td>{booking.time}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         </>
//     );
// }

// export default AllBooking;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/AllBooking.css';
import Anavbar from './Anavbar';

function AllBooking() {
    const [bookings, setBookings] = useState([]);
    const [editBooking, setEditBooking] = useState(null);
    const [editedStatus, setEditedStatus] = useState('');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    console.error('Token not found. Please log in again.');
                    return;
                }

                const response = await axios.get('http://localhost:8080/bookings/get', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const handleEdit = (booking) => {
        setEditBooking(booking);
        setEditedStatus(booking.status);
    };

    const handleSaveEdit = async () => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found. Please log in again.');
                return;
            }

            await axios.put(`http://localhost:8080/bookings/put/${editBooking.name}`, {
                status: editedStatus,
                // add other fields as needed
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Reset editBooking and editedStatus
            setEditBooking(null);
            setEditedStatus('');

            // Fetch updated bookings
            fetchBookings();
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditBooking(null);
        setEditedStatus('');
    };

    return (
        <>
            <Anavbar />
            <div className="view-bookings-page">
                <h1>View Bookings Page</h1>

                <div className="booking-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Service Type</th>
                                <th>Date</th>
                                <th>Duration</th>
                                <th>Description</th>
                                <th>Care Beneficiary</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.name}</td>
                                    <td>{booking.phoneNumber}</td>
                                    <td>{booking.serviceType}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.duration}</td>
                                    <td>{booking.description}</td>
                                    <td>{booking.careBeneficiary}</td>
                                    <td>{booking.address}</td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <input
                                                type="text"
                                                value={editedStatus}
                                                onChange={(e) => setEditedStatus(e.target.value)}
                                            />
                                        ) : (
                                            booking.status
                                        )}
                                    </td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <>
                                                <button onClick={handleSaveEdit}>Save</button>
                                                <button onClick={handleCancelEdit}>Cancel</button>
                                            </>
                                        ) : (
                                            <button onClick={() => handleEdit(booking)}>Edit</button>
                                        )}
                                    </td>
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





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/css/AllBooking.css';
// import Anavbar from './Anavbar';

// function AllBooking() {
//     const [bookings, setBookings] = useState([]);
//     const [statusOptions, setStatusOptions] = useState(['Pending', 'Confirmed', 'Cancelled']); // Add your status options
//     const [selectedBooking, setSelectedBooking] = useState(null);

//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const token = localStorage.getItem('token');

//                 if (!token) {
//                     console.error('Token not found. Please log in again.');
//                     return;
//                 }

//                 const response = await axios.get('http://localhost:8080/bookings/get', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 setBookings(response.data);
//             } catch (error) {
//                 console.error('Error fetching bookings:', error);
//             }
//         };

//         fetchBookings();
//     }, []);

//     const handleEdit = (booking) => {
//         setSelectedBooking(booking);
//         // Open your modal or navigate to the edit page here
//     };

//     const handleStatusChange = async (bookingId, newStatus) => {
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 console.error('Token not found. Please log in again.');
//                 return;
//             }

//             // Update the status for the selected booking
//             await axios.put(
//                 `http://localhost:8080/bookings/updateStatus/${bookingId}`,
//                 { status: newStatus },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             // Fetch updated bookings
//             fetchBookings();
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }
//     };

//     return (
//         <>
//             <Anavbar />
//             <div className="view-bookings-page">
//                 <h1>View Bookings Page</h1>

//                 <div className="booking-list">
//                     <table>
//                         <thead>
//                             <tr>
//                                 {/* <th>ID</th> */}
//                                 <th>Name</th>
//                                 <th>Phone Number</th>
//                                 <th>Service Type</th>
//                                 <th>Date</th>
//                                 <th>Duration</th>
//                                 <th>Description</th>
//                                 <th>Care Beneficiary</th>
//                                 <th>Address</th>
//                                 <th>Status</th>
//                                 <th>Edit</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookings.map((booking) => (
//                                 <tr key={booking.id}>
//                                     <td>{booking.name}</td>
//                                     <td>{booking.phoneNumber}</td>
//                                     <td>{booking.serviceType}</td>
//                                     <td>{booking.date}</td>
//                                     <td>{booking.duration}</td>
//                                     <td>{booking.description}</td>
//                                     <td>{booking.careBeneficiary}</td>
//                                     <td>{booking.address}</td>
//                                     <td>
//                                         <select
//                                             value={booking.status}
//                                             onChange={(e) => handleStatusChange(booking.id, e.target.value)}
//                                         >
//                                             {statusOptions.map((status) => (
//                                                 <option key={status} value={status}>
//                                                     {status}
//                                                 </option>
//                                             ))}
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <button onClick={() => handleEdit(booking)}>Edit</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AllBooking;
