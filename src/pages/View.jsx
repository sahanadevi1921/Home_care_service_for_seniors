// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/css/AllBooking.css';
// import Navbar from './Navbar';

// function View() {
//     const [services, setServices] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchServices = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 console.log('Token:', token);

//                 // Make sure token is available
//                 if (!token) {
//                     console.error('Token not found. Please log in again.');
//                     return;
//                 }

//                 // Perform the HTTP GET request using Axios
//                 const response = await axios.get('http://localhost:8080/service/get', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 // Update state with the fetched data
//                 setServices(response.data);
//             } catch (error) {
//                 // Handle errors, e.g., show an error message
//                 console.error('Error fetching services:', error);
//                 setError('Error fetching services. Please try again.');
//             }
//         };

//         // Call the fetchServices function when the component mounts
//         fetchServices();
//     }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//     // Your form submission function remains unchanged
//     const handleSubmit = async (event) => {
//         // ... (your existing form submission logic)
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="view-bookings-page">
//                 <h1>View Service</h1>

//                 {error && <p style={{ color: 'red' }}>{error}</p>}

//                 <div className="booking-list">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Service Type</th>
//                                 <th>Description</th>
//                                 <th>Charge</th>
//                                 <th>Duration</th>
//                                 <th>Service Availability</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {services.map((service) => (
//                                 <tr key={service.id}>
//                                     <td>{service.serviceType}</td>
//                                     <td>{service.serviceDescription}</td>
//                                     <td>{service.charge}</td>
//                                     <td>{service.duration}</td>
//                                     <td>{service.serviceAvailability}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default View;
// second code:
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../assets/css/View.css';
// import Navbar from './Navbar';

// function View() {
//     const [services, setServices] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate(); // React Router navigate

//     useEffect(() => {
//         const fetchServices = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 console.log('Token:', token);

//                 if (!token) {
//                     console.error('Token not found. Please log in again.');
//                     return;
//                 }

//                 const response = await axios.get('http://localhost:8080/service/get', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 setServices(response.data);
//             } catch (error) {
//                 console.error('Error fetching services:', error);
//                 setError('Error fetching services. Please try again.');
//             }
//         };

//         fetchServices();
//     }, []);

//     const handleBookNow = (serviceId, available) => {
//         if (available) {
//             console.log(`Book Now clicked for service with ID ${serviceId}`);
//             navigate('/BookService');
//         } else {
//             console.log(`Service with ID ${serviceId} is not available for booking.`);
//             // Optionally display a message informing the user that the service is not available
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="view-bookings-page">
//                 <h1>View Service</h1>
//                 <br></br><br></br>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}

//                 <div className="card-list">
//                     {services.map((service) => (
//                         <div className="card" key={service.id}>
//                             <h2>{service.serviceType}</h2>
//                             <p>Description: {service.serviceDescription}</p>
//                             <p>Charge: {service.charge}</p>
//                             <p>Duration: {service.duration}</p>
//                             <p>Availability: {service.available ? 'Available' : 'Not Available'}</p>
//                             {service.available ? (
//                                 <button onClick={() => handleBookNow(service.id, true)}>Book Now</button>
//                             ) : (
//                                 <button disabled>Book Now</button>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default View;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/View.css';
import Navbar from './Navbar';

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

function View() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // React Router navigate

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
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
      <Navbar />
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

export default View;

