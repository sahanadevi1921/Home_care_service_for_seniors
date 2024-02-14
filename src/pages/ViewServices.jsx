// import React, { useState } from 'react';
// import '../assets/css/AllBooking.css';
// import { Link } from 'react-router-dom';

// import Unavbar from './Unavbar';

// function ViewServices() {
//     const [bookings, setBookings] = useState([
//         // Your bookings data here
//         { id: 1, serviceType: 'Acservice', Description: 'All ac can service', date: '2024-02-10', time: '10:00 AM', charges: '20$' },
//         { id: 2, serviceType: 'AudioService', Description: 'All audio can service', date: '2024-02-12', time: '2:00 PM', charges: '30$' },
//         // Add more bookings as needed
//     ]);

//     return (
//         <>
//             <Unavbar />
//             <div className="view-bookings-page">
//                 <h1>View Service</h1>

//                 <div className="booking-list">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Service Type</th>
//                                 <th>Description</th>
//                                 <th>Date</th>
//                                 <th>Time</th>
//                                 <th>Charges</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookings.map((booking) => (
//                                 <tr key={booking.id}>
//                                     <td>{booking.id}</td>
//                                     <td>{booking.serviceType}</td>
//                                     <td>{booking.Description}</td>
//                                     <td>{booking.date}</td>
//                                     <td>{booking.time}</td>
//                                     <td>{booking.charges}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ViewServices;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/View.css';
import Unavbar from './Unavbar';

// Wrapper component for service cards
const ServiceCard = ({ service, onBookNow }) => {
  return (
    <div className="card">
        <img class="card-img-top" src={service.image} alt="Card image cap"/>
    <div class="card-body">
      <h5 className="card-title">{service.serviceType}</h5>
      <p className="card-text">Description: {service.serviceDescription}</p>
      <p className="card-text">Charge: {service.charge}</p>
      <p className="card-text">Duration: {service.duration}</p>
      <p className="card-text">Availability: {service.available ? 'Available' : 'Not Available'}</p>
      {service.available ? (
        <button className="btn btn-primary" onClick={() => onBookNow(service.id, true)}>
          Book Now
        </button>
      ) : (
        <button className="btn btn-secondary" disabled>
          Book Now
        </button>
      )}
    </div>
    </div>
  );
};

function ViewServices() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // React Router navigate

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/Login';
          console.error('Token not found. Please log in again.');
          return;
        }

        const response = await axios.get('http://localhost:8080/service/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Error fetching services. Please try again.');
      }
    };

    fetchServices();
  }, []);

  const handleBookNow = (serviceId, available) => {
    if (available) {
      console.log(`Book Now clicked for service with ID ${serviceId}`);
      navigate('/BookService');
    } else {
      console.log(`Service with ID ${serviceId} is not available for booking.`);
      // Optionally display a message informing the user that the service is not available
    }
  };

  return (
    <>
      <Unavbar />
        <h1>View Service</h1>
        <br></br>
        <br></br>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="card-deck">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onBookNow={handleBookNow} />
          ))}
        </div>
      
    </>
  );
}

export default ViewServices;


