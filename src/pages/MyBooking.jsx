// MyBooking.js

// MyBooking.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/MyBooking.css';
import Navbar from './Navbar';
import BookingCard from './BookingCard';

function MyBooking() {
    const [bookings, setBookings] = useState([]);
    const [editBooking, setEditBooking] = useState(null);
    const [editedData, setEditedData] = useState({
        name: '',
        phoneNumber: '',
        serviceType: '',
        date: '',
        duration: '',
        description: '',
        careBeneficiary: '',
        address: '',
        status: ''
        // Add other fields as needed
    });

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem('token');
                const name = localStorage.getItem('name');

                if (!token) {
                    console.error('Token not found. Please log in again.');
                    return;
                }

                const response = await axios.get(`http://localhost:8080/bookdto/get/${name}`, {
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
        setEditedData({
            name: booking.name,
            phoneNumber: booking.phoneNumber,
            serviceType: booking.serviceType,
            date: booking.date,
            duration: booking.duration,
            description: booking.description,
            careBeneficiary: booking.careBeneficiary,
            address: booking.address,
            status: booking.status
            // Add other fields as needed
        });
    };

    const handleSaveEdit = async (id) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found. Please log in again.');
                return;
            }

            await axios.put(`http://localhost:8080/bookdto/update/${id}`, editedData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setEditBooking(null);
            setEditedData({
                name: '',
                phoneNumber: '',
                serviceType: '',
                date: '',
                duration: '',
                description: '',
                careBeneficiary: '',
                address: '',
                status: ''
                // Reset other fields as needed
            });
            fetchBookings();
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditBooking(null);
        setEditedData({
            name: '',
            phoneNumber: '',
            serviceType: '',
            date: '',
            duration: '',
            description: '',
            careBeneficiary: '',
            address: '',
            status: ''
            // Reset other fields as needed
        });
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found. Please log in again.');
                return;
            }

            await axios.delete(`http://localhost:8080/bookdto/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            fetchBookings();
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="my-booking-page">
                <h1 className="my-booking-page-h1">View Bookings Page</h1>

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
                                <BookingCard
                                    key={booking.id}
                                    booking={booking}
                                    editBooking={editBooking}
                                    editedData={editedData}
                                    onEdit={handleEdit}
                                    onSaveEdit={handleSaveEdit}
                                    onCancelEdit={handleCancelEdit}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MyBooking;







// import React, { useState } from 'react';
// import '../assets/css/MyBooking.css';
// import Navbar from './Navbar';

// function MyBooking() {
//     const [bookings, setBookings] = useState([
//         {
//             id: 1,
//             serviceType: 'Service 1',
//             timing: '10:00 AM - 12:00 PM',
//             description: 'Description 1',
//             serviceCost: '50$',
//             submissionDate: '2024-02-15',
//             bookingStatus: 'Pending',
//         },
//         {
//             id: 2,
//             serviceType: 'Service 2',
//             timing: '2:00 PM - 4:00 PM',
//             description: 'Description 2',
//             serviceCost: '30$',
//             submissionDate: '2024-02-16',
//             bookingStatus: 'Confirmed',
//         },
//         // Add more bookings as needed
//     ]);

//     const [editBooking, setEditBooking] = useState(null);
//     const [editedServiceType, setEditedServiceType] = useState('');
//     const [editedTiming, setEditedTiming] = useState('');
//     const [editedDescription, setEditedDescription] = useState('');
//     const [editedServiceCost, setEditedServiceCost] = useState('');
//     const [editedSubmissionDate, setEditedSubmissionDate] = useState('');
//     const [editedBookingStatus, setEditedBookingStatus] = useState('');

//     const handleEdit = (id) => {
//         const bookingToEdit = bookings.find((booking) => booking.id === id);
//         setEditBooking(bookingToEdit);
//         setEditedServiceType(bookingToEdit.serviceType);
//         setEditedTiming(bookingToEdit.timing);
//         setEditedDescription(bookingToEdit.description);
//         setEditedServiceCost(bookingToEdit.serviceCost);
//         setEditedSubmissionDate(bookingToEdit.submissionDate);
//         setEditedBookingStatus(bookingToEdit.bookingStatus);
//     };

//     const handleSaveEdit = () => {
//         setBookings((prevBookings) =>
//             prevBookings.map((booking) =>
//                 booking.id === editBooking.id
//                     ? {
//                           ...booking,
//                           serviceType: editedServiceType,
//                           timing: editedTiming,
//                           description: editedDescription,
//                           serviceCost: editedServiceCost,
//                           submissionDate: editedSubmissionDate,
//                           bookingStatus: editedBookingStatus,
//                       }
//                     : booking
//             )
//         );
//         setEditBooking(null);
//         // Reset the edited fields
//         setEditedServiceType('');
//         setEditedTiming('');
//         setEditedDescription('');
//         setEditedServiceCost('');
//         setEditedSubmissionDate('');
//         setEditedBookingStatus('');
//     };

//     const handleCancelEdit = () => {
//         setEditBooking(null);
//         // Reset the edited fields
//         setEditedServiceType('');
//         setEditedTiming('');
//         setEditedDescription('');
//         setEditedServiceCost('');
//         setEditedSubmissionDate('');
//         setEditedBookingStatus('');
//     };

//     const handleDelete = (id) => {
//         setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="my-booking-page">
//                 <h1 style={{textAlign:'center',paddingRight:'50px'}}>My Bookings</h1>

//                 <div className="booking-list">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Booking Id</th>
//                                 <th>Service Type</th>
//                                 <th>Timing</th>
//                                 <th>Description</th>
//                                 <th>Service Cost</th>
//                                 <th>Submission Date</th>
//                                 <th>Booking Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookings.map((booking) => (
//                                 <tr key={booking.id}>
//                                     <td>{booking.id}</td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedServiceType}
//                                                 onChange={(e) => setEditedServiceType(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.serviceType
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedTiming}
//                                                 onChange={(e) => setEditedTiming(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.timing
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedDescription}
//                                                 onChange={(e) => setEditedDescription(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.description
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedServiceCost}
//                                                 onChange={(e) => setEditedServiceCost(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.serviceCost
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedSubmissionDate}
//                                                 onChange={(e) => setEditedSubmissionDate(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.submissionDate
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedBookingStatus}
//                                                 onChange={(e) => setEditedBookingStatus(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.bookingStatus
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <>
//                                                 <button onClick={handleSaveEdit}>Save</button>
//                                                 <button onClick={handleCancelEdit}>Cancel</button>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <button onClick={() => handleEdit(booking.id)}>Edit</button>
//                                                 <button onClick={() => handleDelete(booking.id)}>Delete</button>
//                                             </>
//                                         )}
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

// export default MyBooking;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/css/MyBooking.css';
// import Navbar from './Navbar';

// function MyBooking() {
//     const [bookings, setBookings] = useState([]);
//     const [editBooking, setEditBooking] = useState(null);
//     const [editedName, setEditedName] = useState('');
//     const [editedPhoneNumber, setEditedPhoneNumber] = useState('');
//     const [editedServiceType, setEditedServiceType] = useState('');
//     const [editedDate, setEditedDate] = useState('');
//     const [editedDuration, setEditedDuration] = useState('');
//     const [editedDescription, setEditedDescription] = useState('');
//     const [editedCareBeneficiary, setEditedCareBeneficiary] = useState('');
//     const [editedAddress, setEditedAddress] = useState('');
//     const [editedStatus, setEditedStatus] = useState('');

//     useEffect(() => {
//         fetchBookings();
//     }, []);

//     const fetchBookings = async () => {
//         try {
//             const token = localStorage.getItem('token');

//             if (!token) {
//                 console.error('Token not found. Please log in again.');
//                 return;
//             }

//             const response = await axios.get('http://localhost:8080/bookdto/get/{name}', {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             setBookings(response.data);
//         } catch (error) {
//             console.error('Error fetching bookings:', error);
//         }
//     };

//     const handleEdit = (booking) => {
//         setEditBooking(booking);
//         setEditedName(booking.name);
//         setEditedPhoneNumber(booking.phoneNumber);
//         setEditedServiceType(booking.serviceType);
//         setEditedDate(booking.date);
//         setEditedDuration(booking.duration);
//         setEditedDescription(booking.description);
//         setEditedCareBeneficiary(booking.careBeneficiary);
//         setEditedAddress(booking.address);
//         setEditedStatus(booking.status);
//     };

//     const handleSaveEdit = async () => {
//         try {
//             const token = localStorage.getItem('token');

//             if (!token) {
//                 console.error('Token not found. Please log in again.');
//                 return;
//             }

//             await axios.put(`http://localhost:8080/bookdto/update/${editBooking.id}`, {
//                 name: editedName,
//                 phoneNumber: editedPhoneNumber,
//                 serviceType: editedServiceType,
//                 date: editedDate,
//                 duration: editedDuration,
//                 description: editedDescription,
//                 careBeneficiary: editedCareBeneficiary,
//                 address: editedAddress,
//                 status: editedStatus,
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             setEditBooking(null);
//             setEditedName('');
//             setEditedPhoneNumber('');
//             setEditedServiceType('');
//             setEditedDate('');
//             setEditedDuration('');
//             setEditedDescription('');
//             setEditedCareBeneficiary('');
//             setEditedAddress('');
//             setEditedStatus('');

//             fetchBookings();
//         } catch (error) {
//             console.error('Error updating booking:', error);
//         }
//     };

//     const handleCancelEdit = () => {
//         setEditBooking(null);
//         setEditedName('');
//         setEditedPhoneNumber('');
//         setEditedServiceType('');
//         setEditedDate('');
//         setEditedDuration('');
//         setEditedDescription('');
//         setEditedCareBeneficiary('');
//         setEditedAddress('');
//         setEditedStatus('');
//     };

//     const handleDelete = async (id) => {
//         try {
//             const token = localStorage.getItem('token');

//             if (!token) {
//                 console.error('Token not found. Please log in again.');
//                 return;
//             }

//             await axios.delete(`http://localhost:8080/bookdto/delete/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             fetchBookings();
//         } catch (error) {
//             console.error('Error deleting booking:', error);
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="my-booking-page">
//                 <h1 style={{ textAlign: 'center', paddingRight: '50px' }}>My Bookings</h1>

//                 <div className="booking-list">
//                     <table>
//                         <thead>
//                             <tr>
//                                 {/* <th>Booking Id</th> */}
//                                 <th>Name</th>
//                                 <th>Phone Number</th>
//                                 <th>Service Type</th>
//                                 <th>Date</th>
//                                 <th>Duration</th>
//                                 <th>Description</th>
//                                 <th>Care Beneficiary</th>
//                                 <th>Address</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookings.map((booking) => (
//                                 <tr key={booking.id}>
//                                     <td>{booking.id}</td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedName}
//                                                 onChange={(e) => setEditedName(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.name
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedPhoneNumber}
//                                                 onChange={(e) => setEditedPhoneNumber(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.phoneNumber
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedServiceType}
//                                                 onChange={(e) => setEditedServiceType(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.serviceType
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedDate}
//                                                 onChange={(e) => setEditedDate(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.date
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedDuration}
//                                                 onChange={(e) => setEditedDuration(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.duration
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedDescription}
//                                                 onChange={(e) => setEditedDescription(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.description
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedCareBeneficiary}
//                                                 onChange={(e) => setEditedCareBeneficiary(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.careBeneficiary
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedAddress}
//                                                 onChange={(e) => setEditedAddress(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.address
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <input
//                                                 type="text"
//                                                 value={editedStatus}
//                                                 onChange={(e) => setEditedStatus(e.target.value)}
//                                             />
//                                         ) : (
//                                             booking.status
//                                         )}
//                                     </td>
//                                     <td>
//                                         {editBooking && editBooking.id === booking.id ? (
//                                             <>
//                                                 <button onClick={handleSaveEdit}>Save</button>
//                                                 <button onClick={handleCancelEdit}>Cancel</button>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <button onClick={() => handleEdit(booking)}>Edit</button>
//                                                 <button onClick={() => handleDelete(booking.id)}>Delete</button>
//                                             </>
//                                         )}
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

// export default MyBooking;


