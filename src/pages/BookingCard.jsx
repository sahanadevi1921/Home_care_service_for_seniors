// BookingCard.js

import React from 'react';

const BookingCard = ({ booking, editBooking, editedName, editedStatus, onEdit, onSaveEdit, onCancelEdit, onDelete }) => {
    return (
        <tr key={booking.id}>
            <td>
                {editBooking && editBooking.id === booking.id ? (
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => onEdit(e.target.value)}
                    />
                ) : (
                    booking.name
                )}
            </td>
            {/* Include other td elements for different booking properties */}
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
                        onChange={(e) => onSaveEdit(e.target.value)}
                    />
                ) : (
                    booking.status
                )}
            </td>
            <td>
                {editBooking && editBooking.id === booking.id ? (
                    <>
                        <button onClick={onSaveEdit}>Save</button>
                        <button onClick={onCancelEdit}>Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => onEdit(booking)}>Edit</button>
                        <button onClick={() => onDelete(booking.id)}>Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default BookingCard;
