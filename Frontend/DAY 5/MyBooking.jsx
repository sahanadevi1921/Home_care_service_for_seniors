import React, { useState } from 'react';
import '../assets/css/MyBooking.css';
import Navbar from './Navbar';

function MyBooking() {
    const [bookings, setBookings] = useState([
        {
            id: 1,
            serviceType: 'Service 1',
            timing: '10:00 AM - 12:00 PM',
            description: 'Description 1',
            serviceCost: '50$',
            submissionDate: '2024-02-15',
            bookingStatus: 'Pending',
        },
        {
            id: 2,
            serviceType: 'Service 2',
            timing: '2:00 PM - 4:00 PM',
            description: 'Description 2',
            serviceCost: '30$',
            submissionDate: '2024-02-16',
            bookingStatus: 'Confirmed',
        },
        // Add more bookings as needed
    ]);

    const [editBooking, setEditBooking] = useState(null);
    const [editedServiceType, setEditedServiceType] = useState('');
    const [editedTiming, setEditedTiming] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedServiceCost, setEditedServiceCost] = useState('');
    const [editedSubmissionDate, setEditedSubmissionDate] = useState('');
    const [editedBookingStatus, setEditedBookingStatus] = useState('');

    const handleEdit = (id) => {
        const bookingToEdit = bookings.find((booking) => booking.id === id);
        setEditBooking(bookingToEdit);
        setEditedServiceType(bookingToEdit.serviceType);
        setEditedTiming(bookingToEdit.timing);
        setEditedDescription(bookingToEdit.description);
        setEditedServiceCost(bookingToEdit.serviceCost);
        setEditedSubmissionDate(bookingToEdit.submissionDate);
        setEditedBookingStatus(bookingToEdit.bookingStatus);
    };

    const handleSaveEdit = () => {
        setBookings((prevBookings) =>
            prevBookings.map((booking) =>
                booking.id === editBooking.id
                    ? {
                          ...booking,
                          serviceType: editedServiceType,
                          timing: editedTiming,
                          description: editedDescription,
                          serviceCost: editedServiceCost,
                          submissionDate: editedSubmissionDate,
                          bookingStatus: editedBookingStatus,
                      }
                    : booking
            )
        );
        setEditBooking(null);
        // Reset the edited fields
        setEditedServiceType('');
        setEditedTiming('');
        setEditedDescription('');
        setEditedServiceCost('');
        setEditedSubmissionDate('');
        setEditedBookingStatus('');
    };

    const handleCancelEdit = () => {
        setEditBooking(null);
        // Reset the edited fields
        setEditedServiceType('');
        setEditedTiming('');
        setEditedDescription('');
        setEditedServiceCost('');
        setEditedSubmissionDate('');
        setEditedBookingStatus('');
    };

    const handleDelete = (id) => {
        setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
    };

    return (
        <>
            <Navbar />
            <div className="my-booking-page">
                <h1 style={{textAlign:'center',paddingRight:'50px'}}>My Bookings</h1>

                <div className="booking-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking Id</th>
                                <th>Service Type</th>
                                <th>Timing</th>
                                <th>Description</th>
                                <th>Service Cost</th>
                                <th>Submission Date</th>
                                <th>Booking Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.id}</td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <input
                                                type="text"
                                                value={editedServiceType}
                                                onChange={(e) => setEditedServiceType(e.target.value)}
                                            />
                                        ) : (
                                            booking.serviceType
                                        )}
                                    </td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <input
                                                type="text"
                                                value={editedTiming}
                                                onChange={(e) => setEditedTiming(e.target.value)}
                                            />
                                        ) : (
                                            booking.timing
                                        )}
                                    </td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <input
                                                type="text"
                                                value={editedDescription}
                                                onChange={(e) => setEditedDescription(e.target.value)}
                                            />
                                        ) : (
                                            booking.description
                                        )}
                                    </td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <input
                                                type="text"
                                                value={editedServiceCost}
                                                onChange={(e) => setEditedServiceCost(e.target.value)}
                                            />
                                        ) : (
                                            booking.serviceCost
                                        )}
                                    </td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <input
                                                type="text"
                                                value={editedSubmissionDate}
                                                onChange={(e) => setEditedSubmissionDate(e.target.value)}
                                            />
                                        ) : (
                                            booking.submissionDate
                                        )}
                                    </td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <input
                                                type="text"
                                                value={editedBookingStatus}
                                                onChange={(e) => setEditedBookingStatus(e.target.value)}
                                            />
                                        ) : (
                                            booking.bookingStatus
                                        )}
                                    </td>
                                    <td>
                                        {editBooking && editBooking.id === booking.id ? (
                                            <>
                                                <button onClick={handleSaveEdit}>Save</button>
                                                <button onClick={handleCancelEdit}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <button onClick={() => handleEdit(booking.id)}>Edit</button>
                                                <button onClick={() => handleDelete(booking.id)}>Delete</button>
                                            </>
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

export default MyBooking;


