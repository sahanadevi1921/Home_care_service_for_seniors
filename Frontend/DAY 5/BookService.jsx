// ServiceBooking.jsx

// BookService.jsx

import React, { useState } from 'react';
import '../assets/css/BookService.css';
import Navbar from './Navbar';

const BookService = () => {
  const [customerID, setCustomerID] = useState('');
//   const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  const [description, setDescription] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleCustomerIDChange = (e) => {
    setCustomerID(e.target.value);
  };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleSubmissionDateChange = (e) => {
    setSubmissionDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleBookService = () => {
    if (customerID &&  selectedService && submissionDate && description) {
      setBookingConfirmed(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="service-booking-container">
      {!bookingConfirmed ? (
        <center>
        <div style={{marginTop:"5%"}}>
          <h2>Book a Service</h2>
     <br></br>
          <label htmlFor="customerID">Customer ID:</label>
          <input
            type="text"
            id="customerID"
            value={customerID}
            style={{width:'40%'}}
            onChange={handleCustomerIDChange}
          />

          {/* <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          /> */}

          <label htmlFor="service">Select a Service:</label>
          <select
            id="service"
            value={selectedService}
            style={{width:'40%'}}
            onChange={handleServiceChange}
          >
            <option value="">Select Service</option>
            <option value="cleaning">Cleaning</option>
            <option value="repair">Repair</option>
            <option value="maintenance">Maintenance</option>
          </select>

          <label htmlFor="submissionDate">Submission Date:</label>
          <input
            type="date"
            id="submissionDate"
            value={submissionDate}
            style={{width:'40%'}}
            onChange={handleSubmissionDateChange}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            style={{width:'40%'}}
            onChange={handleDescriptionChange}
          ></textarea>
<br></br>
<center>
          <button onClick={handleBookService}>Book Service</button>
          </center>
        </div>
        </center>
      ) : (
        <div>
          <h2>Booking Confirmed!</h2>
          <p>Customer ID: {customerID}</p>
          {/* <p>Name: {name}</p> */}
          <p>Service: {selectedService}</p>
          <p>Submission Date: {submissionDate}</p>
          <p>Description: {description}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default BookService;

