
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ServiceList from './ServiceList';
// import EditService from './EditService';
// import '../assets/css/ViewService.css';
// import Anavbar from './Anavbar';

// function ViewService() {
//     const [services, setServices] = useState([
//         // Your services data here
//         { id: 1, name: 'Service 1', description: 'Description 1', extraCharges: '10$', timing: '10:00 AM - 5:00 PM' },
//         { id: 2, name: 'Service 2', description: 'Description 2', extraCharges: '15$', timing: '9:00 AM - 4:00 PM' },
//         // Add more services as needed
//     ]);

//     const [selectedService, setSelectedService] = useState(null);

//     const handleEdit = (service) => {
//         setSelectedService(service);
//     };

//     const handleDelete = (serviceId) => {
//         setServices((prevServices) => prevServices.filter((service) => service.id !== serviceId));
//     };

//     const handleSave = (editedService) => {
//         setServices((prevServices) =>
//             prevServices.map((service) => (service.id === editedService.id ? editedService : service))
//         );
//         setSelectedService(null);
//     };

//     return (
//         <>
//         <Anavbar/>
//         <div className="view-service-page">
//             <h1 >View Service Page</h1>

//             {selectedService ? (
//                 <EditService service={selectedService} onSave={handleSave} />
//             ) : (
//                 <>
//                     <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} />
//                 </>
//             )}

//             {/* Back to Dashboard button */}
//             <Link to="/Homepage">
//                 <button className="back-to-dashboard-button">Back to Dashboard</button>
//             </Link>
//         </div>
//         </>
//     );
// }

// export default ViewService;

//Admin

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import '../assets/css/ViewService.css';
// import Anavbar from './Anavbar';
// import ServiceList from './ServiceList'; // Assuming you have a ServiceList component
// import EditService from './EditService'; // Assuming you have an EditService component

// function ViewService() {
//     const [services, setServices] = useState([]);
//     const [selectedService, setSelectedService] = useState(null);

//     useEffect(() => {
//         const fetchServices = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 const response = await axios.get('http://localhost:8080/service/get', {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

//                 setServices(response.data);
//             } catch (error) {
//                 console.error('Error fetching services:', error);
//             }
//         };

//         fetchServices();
//     }, []);

//     const handleEdit = (service) => {
//         setSelectedService(service);
//     };

//     const handleDelete = async (serviceType) => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.delete(`http://localhost:8080/service/delete/${serviceType}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setServices((prevServices) => prevServices.filter((service) => service.Type !== serviceType));
//             window.location.reload();
//         } catch (error) {
//             console.error('Error deleting service:', error);
//         }
//     };
    
//     const handleSave = async (editedService) => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.put(`http://localhost:8080/service/put/${editedService.serviceType}`, editedService, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setServices((prevServices) =>
//                 prevServices.map((service) => (service.id === editedService.id ? editedService : service))
//             );
//             setSelectedService(null);
//         } catch (error) {
//             console.error('Error updating service:', error);
//         }
//     };

//     return (
//         <>
//             <Anavbar />
//             <div className="view-service-page">
//                 <h1>View Service Page</h1>

//                 {selectedService ? (
//                     <EditService service={selectedService} onSave={handleSave} />
//                 ) : (
//                     <>
//                         <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} />
//                     </>
//                 )}

//                 {/* Back to Dashboard button */}
//                 <Link to="/Homepage">
//                     <button className="back-to-dashboard-button">Back to Dashboard</button>
//                 </Link>
//             </div>
//         </>
//     );
// }

// export default ViewService;


// ViewService.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/ViewService.css';
import Anavbar from './Anavbar';
import ServiceList from './ServiceList';
import EditService from './EditService';

// ... (other imports)

function ViewService() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
  
    useEffect(() => {
      const fetchServices = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://localhost:8080/service/get', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          setServices(response.data);
        } catch (error) {
          console.error('Error fetching services:', error);
        }
      };
  
      fetchServices();
    }, []);
  
    const handleEdit = (service) => {
      setSelectedService(service);
    };
  
    const handleDelete = async (serviceType) => {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:8080/service/delete/${serviceType}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setServices((prevServices) => prevServices.filter((service) => service.Type !== serviceType));
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    };
  
    const handleSave = async (editedService) => {
      try {
        const token = localStorage.getItem('token');
        await axios.put(`http://localhost:8080/service/put/${editedService.serviceType}`, editedService, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setServices((prevServices) =>
          prevServices.map((service) => (service.id === editedService.id ? editedService : service))
        );
        setSelectedService(null);
      } catch (error) {
        console.error('Error updating service:', error);
      }
    };
  
    return (
      <>
        <Anavbar />
        <div className="view-service-page">
          <h1>View Service Page</h1>
  
          {selectedService ? (
            <EditService service={selectedService} onSave={handleSave} />
          ) : (
            <>
              <div className="card-deck">
                {services.map((service) => (
                  <div className="card" key={service.id}>
                    <img className="card-img-top" src={service.image} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{service.serviceType}</h5>
                      <p className="card-text">{service.serviceDescription}</p>
                      <p className="card-text">Charge: {service.charge}</p>
                      <p className="card-text">Duration: {service.duration}</p>
                      <p className="card-text">
                        Availability: {service.available ? 'Available' : 'Not Available'}
                      </p>
                      {/* Add other fields as needed */}
                      <div className="button-group">
                        <button className="btn btn-primary" onClick={() => handleEdit(service)}>
                          Edit
                        </button>
                        <button className="btn btn-danger" onClick={() => handleDelete(service.Type)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
  
          {/* Back to Dashboard button */}
          <Link to="/Homepage">
            {/* <button className="back-to-dashboard-button">Back to Dashboard</button> */}
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
        </div>
      </>
    );
  }
  
  export default ViewService;
  








































































//src/components/AdminServicesPage.jsx
// import React, { useState } from 'react';
// import ServiceList from './ServiceList'; // Assuming you have a ServiceList component
// import EditService from './EditService'; // Assuming you have an EditService component
// import '../assets/css/ViewService.css';

// function ViewService() {
//     const [services, setServices] = useState([
//         // Your services data here
//         { id: 1, name: 'Service 1', description: 'Description 1', extraCharges: '10$', timing: '10:00 AM - 5:00 PM' },
//         { id: 2, name: 'Service 2', description: 'Description 2', extraCharges: '15$', timing: '9:00 AM - 4:00 PM' },
//         // Add more services as needed
//     ]);

//     const [selectedService, setSelectedService] = useState(null);

//     const handleEdit = (service) => {
//         setSelectedService(service);
//     };

//     const handleDelete = (serviceId) => {
//         setServices((prevServices) => prevServices.filter((service) => service.id !== serviceId));
//     };

//     const handleSave = (editedService) => {
//         setServices((prevServices) =>
//             prevServices.map((service) => (service.id === editedService.id ? editedService : service))
//         );
//         setSelectedService(null);
//     };

//     return (
//         <div className="admin-services-page">
            

//             {selectedService ? (
//                 <EditService service={selectedService} onSave={handleSave} />
//             ) : (
//                 <>
//                     <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} />
//                 </>
//             )}
//         </div>
//     );
// }

// export default ViewService;

// src/components/ViewService.jsx