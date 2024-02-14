// src/components/AddService.jsx
//Admin

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/AddService.css';
import Anavbar from './Anavbar';

function AddService() {
  const [formData, setFormData] = useState({
    serviceType: '',
    serviceDescription: '',
    charge: '',
    duration: '',
    available: '',
    image:'',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        setError(`Field '${key}' cannot be empty.`);
        return;
      }
    }

    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
      if (!token) {
        setError('Token not found. Please log in again.');
        return;
      }

      const response = await axios.post('http://localhost:8080/service/add', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Form submitted!', response.data);
      setFormData({
        serviceType: '',
        serviceDescription: '',
        charge: '',
        duration: '',
        available: '',
        image: '',
      });
      setIsSuccess(true);
    } catch (error) {
      console.error('Form submission failed:', error);
      setError('Form submission failed. Please try again.');
    }
  };

  return (
    <>
      <Anavbar />
      <div className="Addback">
        <div className="add-service">
          <h1>Add New Service</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="serviceType">Service Type:</label>
            <input
              type="text"
              id="serviceType"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              required
            />

            <label htmlFor="serviceDescription">Service Description:</label>
            <textarea
              id="serviceDescription"
              value={formData.serviceDescription}
              onChange={(e) => setFormData({ ...formData, serviceDescription: e.target.value })}
              required
            />

            <label htmlFor="charge">Charge:</label>
            <input
              type="text"
              id="charge"
              value={formData.charge}
              onChange={(e) => setFormData({ ...formData, charge: e.target.value })}
              required
            />

            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              required
            />

            <label htmlFor="available">Service Availability:</label>
            <input
              type="text"
              id="available"
              value={formData.available}
              onChange={(e) => setFormData({ ...formData, available: e.target.value })}
              required
            />
            <label htmlFor="image">Image url:</label>
            <input
              type="text"
              id="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
            />

            <button
              type="submit"
              style={{
                color: 'red',
                backgroundColor: 'white',
                border: '1px solid red',
              }}
            >
              Add Service
            </button><br></br>

            {isSuccess && (
              <div className="success-message">
                <p>Service details successfully added!</p>
              </div>
            )}

            {error && (
              <div className="error-message">
                <p>{error}</p>
              </div>
            )}

            <Link to="/Homepage" style={{ textAlign: 'center' }}>
              <button
                type="button"
                style={{
                  color: 'red',
                  backgroundColor: 'white',
                  border: '1px solid red',
                  textAlign: 'center',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'red';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'red';
                }}
              >
                Back to dashboard
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddService;




// // src/components/AddService.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/AddService.css';
// import Anavbar from './Anavbar';

// function AddService() {
//     const [serviceName, setServiceName] = useState('');
//     const [serviceDescription, setServiceDescription] = useState('');
//     const [extraCharges, setExtraCharges] = useState('');
//     const [timing, setTiming] = useState('');
//     const [availability, setAvailability] = useState(''); // New field for service availability
//     const [isSuccess, setIsSuccess] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add logic to handle the submission of the new service
//         console.log('Service Added:', { serviceName, serviceDescription, extraCharges, timing, availability });
//         // Simulating a success message by setting isSuccess to true
//         setIsSuccess(true);

//         // You can implement actual API calls or state management here
//     };

//     return (
//         <>
//             <Anavbar />
//             <div className="Addback">
//                 <div className="add-service">
//                     <h1>Add New Service</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="serviceName">Service Type:</label>
//                         <input
//                             type="text"
//                             id="serviceName"
//                             value={serviceName}
//                             onChange={(e) => setServiceName(e.target.value)}
//                             required
//                         />

//                         <label htmlFor="serviceDescription">Service Description:</label>
//                         <textarea
//                             id="serviceDescription"
//                             value={serviceDescription}
//                             onChange={(e) => setServiceDescription(e.target.value)}
//                             required
//                         />

//                         <label htmlFor="extraCharges">Charge:</label>
//                         <input
//                             type="text"
//                             id="extraCharges"
//                             value={extraCharges}
//                             onChange={(e) => setExtraCharges(e.target.value)}
//                             required
//                         />

//                         <label htmlFor="timing">Duration:</label>
//                         <input
//                             type="text"
//                             id="timing"
//                             value={timing}
//                             onChange={(e) => setTiming(e.target.value)}
//                             required
//                         />

//                         {/* New field for service availability */}
//                         <label htmlFor="availability">Availability:</label>
//                         <input
//                             type="text"
//                             id="availability"
//                             value={availability}
//                             onChange={(e) => setAvailability(e.target.value)}
//                             required
//                         />

//                         <button type="submit">Add Service</button><br /><br />

//                         {isSuccess && (
//                             <div className="success-message">
//                                 <p>Service details successfully added!</p>
//                             </div>
//                         )}

//                         {/* Add "Back to Dashboard" link */}
//                         <Link to="/Homepage">
//                             <button type="button"><p style={{ textAlign: 'center', paddingLeft: '220px', paddingRight: '220px' }}>Back to Dashboard</p></button>
//                         </Link>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AddService;


