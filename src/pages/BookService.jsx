// import React, { useState } from 'react';
// import '../assets/css/BookService.css';

// import axios from 'axios';

// const BookService = () => {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [serviceType, setServiceType] = useState('');
//   const [date, setDate] = useState('');
//   const [duration, setDuration] = useState('');
//   const [description, setDescription] = useState('');
//   const [careBeneficiary, setCareBeneficiary] = useState('');
//   const [address, setAddress] = useState('');
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleServiceTypeChange = (e) => {
//     setServiceType(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleCareBeneficiaryChange = (e) => {
//     setCareBeneficiary(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleBookService = async () => {
//     if (name && phoneNumber && serviceType && date && duration && description && careBeneficiary && address) {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           alert('Token not found. Please log in again.');
//           return;
//         }

//         const formData = {
//           name,
//           phoneNumber,
//           serviceType,
//           date,
//           duration,
//           description,
//           careBeneficiary,
//           address,
//         };

//         const response = await axios.post('http://localhost:8080/bookdto/post', formData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log('Service booked successfully!', response.data);
//         setBookingConfirmed(true);
//       } catch (error) {
//         console.error('Service booking failed:', error);
//         alert('booking is not available.');
//       }
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };
//   return (
//     <>
   
//       <div className="service-booking-container" >
//         {!bookingConfirmed ? (
//           <div >
//           <center>
//             <div style={{ marginTop: "5%" }}>
//               <h2>Book a Service</h2>
//               <br></br>
             

//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 style={{ width: '40%' }}
//                 onChange={handleNameChange}
//               />

//               <label htmlFor="phoneNumber">Phone Number:</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 style={{ width: '40%' }}
//                 onChange={handlePhoneNumberChange}
//               />

            
//               <label htmlFor="serviceType">Service Type:</label>
//               <input
//                 type="text"
//                 id="ServiceType"
//                 value={serviceType}
//                 style={{ width: '40%' }}
//                 onChange={handleServiceTypeChange}
//               />

//               <label htmlFor="date">Date:</label>
//               <input
//                 type="text"
//                 placeholder='yyyy-mm-dd'
//                 id="date"
//                 value={date}
//                 style={{ width: '40%' }}
//                 onChange={handleDateChange}
//               />

//               <label htmlFor="duration">Duration:</label>
//               <input
//                 type="text"
//                 id="duration"
//                 value={duration}
//                 style={{ width: '40%' }}
//                 onChange={handleDurationChange}
//               />

//               <label htmlFor="description">Description:</label>
//               <input
//                 type="text"
//                 id="description"
//                 value={description}
                
//                 style={{ width: '40%' }}
//                 onChange={handleDescriptionChange}
//               ></input>

//               <label htmlFor="careBeneficiary">Care Beneficiary:</label>
//               <input
//                 type="text"
//                 id="careBeneficiary"
//                 value={careBeneficiary}
//                 style={{ width: '40%' }}
//                 onChange={handleCareBeneficiaryChange}
//               />

//               <label htmlFor="address">Address:</label>
//               <input
//                 type="text"
//                 id="address"
//                 value={address}
//                 style={{ width: '40%' }}
//                 onChange={handleAddressChange}
//               ></input>

//               <br></br>
//               <center>
//                 <button onClick={handleBookService}>Book Service</button>
//               </center>
//             </div>
//           </center>
//           </div>
//         ) : (
//           <div>
//             <h2>Booking Confirmed!</h2>
//             {/* <p>Customer ID: {customerID}</p> */}
//             <p>Name: {name}</p>
//             <p>Phone Number: {phoneNumber}</p>
//             <p>Service: {serviceType}</p>
//             <p>Submission Date: {Date}</p>
//             <p>Duration: {duration}</p>
//             <p>Description: {description}</p>
//             <p>Care Beneficiary: {careBeneficiary}</p>
//             <p>Address: {address}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BookService;

import React, { useState } from 'react';
import '../assets/css/BookService.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookService = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [careBeneficiary, setCareBeneficiary] = useState('');
  const [address, setAddress] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingError, setBookingError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCareBeneficiaryChange = (e) => {
    setCareBeneficiary(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleBookService = async () => {
    if (name && phoneNumber && serviceType && date && duration && description && careBeneficiary && address) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('Token not found. Please log in again.');
          return;
        }

        const formData = {
          name,
          phoneNumber,
          serviceType,
          date,
          duration,
          description,
          careBeneficiary,
          address,
        };

        const response = await axios.post('http://localhost:8080/bookdto/post', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Service booked successfully!', response.data);
        setBookingConfirmed(true);
      } catch (error) {
        console.error('Service booking failed:', error);
        setBookingError('Booking is not available. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <div className="service-booking-container">
        {!bookingConfirmed ? (
          <div>
            <center>
              <div style={{ marginTop: '5%' }}>
                <h2>Book a Service</h2>

                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  style={{ width: '40%' }}
                  onChange={handleNameChange}
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  style={{ width: '40%' }}
                  onChange={handlePhoneNumberChange}
                />

                <label htmlFor="serviceType">Service Type:</label>
                <input
                  type="text"
                  id="ServiceType"
                  value={serviceType}
                  style={{ width: '40%' }}
                  onChange={handleServiceTypeChange}
                />

                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  placeholder="yyyy-mm-dd"
                  id="date"
                  value={date}
                  style={{ width: '40%' }}
                  onChange={handleDateChange}
                />

                <label htmlFor="duration">Duration:</label>
                <input
                  type="text"
                  id="duration"
                  value={duration}
                  style={{ width: '40%' }}
                  onChange={handleDurationChange}
                />

                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  style={{ width: '40%' }}
                  onChange={handleDescriptionChange}
                ></input>

                <label htmlFor="careBeneficiary">Care Beneficiary:</label>
                <input
                  type="text"
                  id="careBeneficiary"
                  value={careBeneficiary}
                  style={{ width: '40%' }}
                  onChange={handleCareBeneficiaryChange}
                />

                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  style={{ width: '40%' }}
                  onChange={handleAddressChange}
                ></input>

                <br></br>
                <center>
                  <button onClick={handleBookService}>Book Service</button>
                </center>

                {/* Display error message */}
                {bookingError && (
                  <div className="error-message">
                    <p>{bookingError}</p>
                  </div>
                )}
              </div>
            </center>
          </div>
        ) : (
          <div>
            <h2>Booking Confirmed!</h2>
            {/* ... (previous code) */}
            <p>Name: {name}</p>
             <p>Phone Number: {phoneNumber}</p>
            <p>Service: {serviceType}</p>
             <p>Submission Date: {Date}</p>
             <p>Duration: {duration}</p>
             <p>Description: {description}</p>
             <p>Care Beneficiary: {careBeneficiary}</p>
            <p>Address: {address}</p>

            <Link to="/View" style={{ textAlign: 'center' }}>
            <button
  type="button"
  style={{
    color: 'violet', // New text color
    backgroundColor: 'lavender', // New background color
    border: '1px solid violet', // New border color
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = 'violet';
    e.target.style.color = 'white';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = 'lavender';
    e.target.style.color = 'violet';
  }}
>
  Back to dashboard
</button>


            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default BookService;































































































// import React, { useState } from 'react';
// import '../assets/css/BookService.css';
// import Navbar from './Navbar';

// const BookService = () => {

//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [serviceType, setServiceType] = useState('');
//   const [date, setDate] = useState('');
//   const [duration, setDuration] = useState('');
//   const [description, setDescription] = useState('');
//   const [careBeneficiary, setCareBeneficiary] = useState('');
//   const [address, setAddress] = useState('');
//   const [status, setStatus] = useState('');
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);

  

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleServiceTypeChange = (e) => {
//     setServiceType(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setSubmissionDate(e.target.value);
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleCareBeneficiaryChange = (e) => {
//     setCareBeneficiary(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   };

//   const handleBookService = () => {
//     if (name&& phoneNumber && ServiceType && date && duration && description && careBeneficiary && address && status) {
//       setBookingConfirmed(true);
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="service-booking-container" >
//         {!bookingConfirmed ? (
//           <div >
//           <center>
//             <div style={{ marginTop: "5%" }}>
//               <h2>Book a Service</h2>
//               <br></br>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 style={{ width: '40%' }}
//                 onChange={handleNameChange}
//               />

//               <label htmlFor="phoneNumber">Phone Number:</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 style={{ width: '40%' }}
//                 onChange={handlePhoneNumberChange}
//               />
//               <label htmlFor="serviceType">Service Type:</label>
//               <input
//                 type="text"
//                 id="ServiceType"
//                 value={serviceType}
//                 style={{ width: '40%' }}
//                 onChange={handleServiceTypeChange}
//               />

//               <label htmlFor="date">Date:</label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 style={{ width: '40%' }}
//                 onChange={handleDateChange}
//               />

//               <label htmlFor="duration">Duration:</label>
//               <input
//                 type="text"
//                 id="duration"
//                 value={duration}
//                 style={{ width: '40%' }}
//                 onChange={handleDurationChange}
//               />

//               <label htmlFor="description">Description:</label>
//               <input
//                 type="text"
//                 id="description"
//                 value={description}
                
//                 style={{ width: '40%' }}
//                 onChange={handleDescriptionChange}
//               ></input>

//               <label htmlFor="careBeneficiary">Care Beneficiary:</label>
//               <input
//                 type="text"
//                 id="careBeneficiary"
//                 value={careBeneficiary}
//                 style={{ width: '40%' }}
//                 onChange={handleCareBeneficiaryChange}
//               />

//               <label htmlFor="address">Address:</label>
//               <input
//                 type="text"
//                 id="address"
//                 value={address}
//                 style={{ width: '40%' }}
//                 onChange={handleAddressChange}
//               ></input>

//               <label htmlFor="status">Status:</label>
//               <input
//                 type="text"
//                 id="status"
//                 value={status}
//                 style={{ width: '40%' }}
//                 onChange={handleStatusChange}
//               />

//               <br></br>
//               <center>
//                 <button onClick={handleBookService}>Book Service</button>
//               </center>
//             </div>
//           </center>
//           </div>
//         ) : (
//           <div>
//             <h2>Booking Confirmed!</h2>
           
//             <p>Name: {name}</p>
//             <p>Phone Number: {phoneNumber}</p>
//             <p>Service: {serviceType}</p>
//             <p>Submission Date: {Date}</p>
//             <p>Duration: {duration}</p>
//             <p>Description: {description}</p>
//             <p>Care Beneficiary: {careBeneficiary}</p>
//             <p>Address: {address}</p>
//             <p>Status: {status}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BookService;

// this is the axioes code

// import React, { useState } from 'react';
// import '../assets/css/BookService.css';
// import Navbar from './Navbar';
// import axios from 'axios';

// const BookService = () => {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [serviceType, setServiceType] = useState('');
//   const [date, setDate] = useState('');
//   const [duration, setDuration] = useState('');
//   const [description, setDescription] = useState('');
//   const [careBeneficiary, setCareBeneficiary] = useState('');
//   const [address, setAddress] = useState('');
 
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleServiceTypeChange = (e) => {
//     setServiceType(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleCareBeneficiaryChange = (e) => {
//     setCareBeneficiary(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

 

//   const handleBookService = async () => {
//     if (name && phoneNumber && serviceType && date && duration && description && careBeneficiary && address) {
//       try {
        
//         const response = await axios.post('http://localhost:8080/bookdto/post', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           name,
//           phoneNumber,
//           serviceType,
//           date,
//           duration,
//           description,
//           careBeneficiary,
//           address,
         
//         });

       
//         const bookingDetails = response.data;

//         setBookingConfirmed(true);
//         console.log('Booking Confirmed:', bookingDetails);
//       } catch (error) {
//         console.error('Error booking service:', error);
//       }
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="service-booking-container">
//         {!bookingConfirmed ? (
//           <div>
//             <center>
//               <div style={{ marginTop: '5%' }}>
//                 <h2>Book a Service</h2>
//                 <br></br>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={name}
//                   style={{ width: '40%' }}
//                   onChange={handleNameChange}
//                 />

//                 <label htmlFor="phoneNumber">Phone Number:</label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   value={phoneNumber}
//                   style={{ width: '40%' }}
//                   onChange={handlePhoneNumberChange}
//                 />

//                 <label htmlFor="serviceType">Service Type:</label>
//                 <input
//                   type="text"
//                   id="serviceType"
//                   value={serviceType}
//                   style={{ width: '40%' }}
//                   onChange={handleServiceTypeChange}
//                 />

//                 <label htmlFor="date">Date:</label>
//                 <input
//                   type="date"
//                   id="date"
//                   value={date}
//                   style={{ width: '40%' }}
//                   onChange={handleDateChange}
//                 />

//                 <label htmlFor="duration">Duration:</label>
//                 <input
//                   type="text"
//                   id="duration"
//                   value={duration}
//                   style={{ width: '40%' }}
//                   onChange={handleDurationChange}
//                 />

//                 <label htmlFor="description">Description:</label>
//                 <input
//                   type="text"
//                   id="description"
//                   value={description}
//                   style={{ width: '40%' }}
//                   onChange={handleDescriptionChange}
//                 ></input>

//                 <label htmlFor="careBeneficiary">Care Beneficiary:</label>
//                 <input
//                   type="text"
//                   id="careBeneficiary"
//                   value={careBeneficiary}
//                   style={{ width: '40%' }}
//                   onChange={handleCareBeneficiaryChange}
//                 />

//                 <label htmlFor="address">Address:</label>
//                 <input
//                   type="text"
//                   id="address"
//                   value={address}
//                   style={{ width: '40%' }}
//                   onChange={handleAddressChange}
//                 ></input>

                

//                 <br></br>
//                 <center>
//                   <button onClick={handleBookService}>Book Service</button>
//                 </center>
//               </div>
//             </center>
//           </div>
//         ) : (
//           <div>
//             <h2>Booking Confirmed!</h2>
//             <p>Name: {name}</p>
//             <p>Phone Number: {phoneNumber}</p>
//             <p>Service: {serviceType}</p>
//             <p>Submission Date: {Date}</p>
//             <p>Duration: {duration}</p>
//             <p>Description: {description}</p>
//             <p>Care Beneficiary: {careBeneficiary}</p>
//             <p>Address: {address}</p>
           
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BookService;

// import React, { useState } from 'react';
// import '../assets/css/BookService.css';
// import Navbar from './Navbar';
// import axios from 'axios';

// const BookService = () => {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [serviceType, setServiceType] = useState('');
//   const [date, setDate] = useState('');
//   const [duration, setDuration] = useState('');
//   const [description, setDescription] = useState('');
//   const [careBeneficiary, setCareBeneficiary] = useState('');
//   const [address, setAddress] = useState('');
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleServiceTypeChange = (e) => {
//     setServiceType(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleCareBeneficiaryChange = (e) => {
//     setCareBeneficiary(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleBookService = async () => {
//     if (name && phoneNumber && serviceType && date && duration && description && careBeneficiary && address) {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           alert('Token not found. Please log in again.');
//           return;
//         }

//         const response = await axios.post(
//           'http://localhost:8080/bookdto/post',
//           {
//             name,
//             phoneNumber,
//             serviceType,
//             date,
//             duration,
//             description,
//             careBeneficiary,
//             address,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const bookingDetails = response.data;
//         setBookingConfirmed(true);
//         console.log('Booking Confirmed:', bookingDetails);
//       } catch (error) {
//         console.error('Error booking service:', error);
//       }
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="service-booking-container">
//         {!bookingConfirmed ? (
//           <div>
//             <center>
//               <div style={{ marginTop: '5%' }}>
//                 <h2>Book a Service</h2>
//                 <br />
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" value={name} onChange={handleNameChange} />

//                 <label htmlFor="phoneNumber">Phone Number:</label>
//                 <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />

//                 <label htmlFor="serviceType">Service Type:</label>
//                 <input type="text" id="serviceType" value={serviceType} onChange={handleServiceTypeChange} />

//                 <label htmlFor="date">Date:</label>
//                 <input type="date" id="date" value={date} onChange={handleDateChange} />

//                 <label htmlFor="duration">Duration:</label>
//                 <input type="text" id="duration" value={duration} onChange={handleDurationChange} />

//                 <label htmlFor="description">Description:</label>
//                 <input type="text" id="description" value={description} onChange={handleDescriptionChange} />

//                 <label htmlFor="careBeneficiary">Care Beneficiary:</label>
//                 <input type="text" id="careBeneficiary" value={careBeneficiary} onChange={handleCareBeneficiaryChange} />

//                 <label htmlFor="address">Address:</label>
//                 <input type="text" id="address" value={address} onChange={handleAddressChange} />

//                 <br />
//                 <center>
//                   <button onClick={handleBookService}>Book Service</button>
//                 </center>
//               </div>
//             </center>
//           </div>
//         ) : (
//           <div>
//             <h2>Booking Confirmed!</h2>
//             <p>Name: {name}</p>
//             <p>Phone Number: {phoneNumber}</p>
//             <p>Service: {serviceType}</p>
//             {/* ... (include other fields) */}
//             <p>Date: {Date}</p>
//              <p>Duration: {duration}</p>
//              <p>Description: {description}</p>
//             <p>Care Beneficiary: {careBeneficiary}</p>
//             <p>Address: {address}</p>
//           </div>
//         )}

//         {/* <div>
//           <h2>Add New Service (Reference)</h2>
//           <AddService />
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default BookService;













































// ServiceBooking.jsx

// BookService.jsx

// import React, { useState } from 'react';
// import '../assets/css/BookService.css';
// import Navbar from './Navbar';

// const BookService = () => {
//   const [customerID, setCustomerID] = useState('');
//   const [name, setName] = useState('');
//   const [selectedService, setSelectedService] = useState('');
//   const [submissionDate, setSubmissionDate] = useState('');
//   const [description, setDescription] = useState('');
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);

//   const handleCustomerIDChange = (e) => {
//     setCustomerID(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleServiceChange = (e) => {
//     setSelectedService(e.target.value);
//   };

//   const handleSubmissionDateChange = (e) => {
//     setSubmissionDate(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleBookService = () => {
//     if (customerID &&  selectedService && submissionDate && description) {
//       setBookingConfirmed(true);
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="service-booking-container">
//       {!bookingConfirmed ? (
//         <center>
//         <div style={{marginTop:"5%"}}>
//           <h2>Book a Service</h2>
//      <br></br>
//           <label htmlFor="customerID">Customer ID:</label>
//           <input
//             type="text"
//             id="customerID"
//             value={customerID}
//             style={{width:'40%'}}
//             onChange={handleCustomerIDChange}
//           />

//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//           />

//           <label htmlFor="service">Select a Service:</label>
//           <select
//             id="service"
//             value={selectedService}
//             style={{width:'40%'}}
//             onChange={handleServiceChange}
//           >
//             <option value="">Select Service</option>
//             <option value="cleaning">Cleaning</option>
//             <option value="repair">Repair</option>
//             <option value="maintenance">Maintenance</option>
//           </select>

//           <label htmlFor="submissionDate">Submission Date:</label>
//           <input
//             type="date"
//             id="submissionDate"
//             value={submissionDate}
//             style={{width:'40%'}}
//             onChange={handleSubmissionDateChange}
//           />

//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             style={{width:'40%'}}
//             onChange={handleDescriptionChange}
//           ></textarea>
// <br></br>
// <center>
//           <button onClick={handleBookService}>Book Service</button>
//           </center>
//         </div>
//         </center>
//       ) : (
//         <div>
//           <h2>Booking Confirmed!</h2>
//           <p>Customer ID: {customerID}</p>
//           <p>Name: {name}</p>
//           <p>Service: {selectedService}</p>
//           <p>Submission Date: {submissionDate}</p>
//           <p>Description: {description}</p>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default BookService;