
// src/components/AdminServicesPage.jsx
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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceList from './ServiceList';
import EditService from './EditService';
import '../assets/css/ViewService.css';
import Anavbar from './Anavbar';

function ViewService() {
    const [services, setServices] = useState([
        // Your services data here
        { id: 1, name: 'Service 1', description: 'Description 1', extraCharges: '10$', timing: '10:00 AM - 5:00 PM' },
        { id: 2, name: 'Service 2', description: 'Description 2', extraCharges: '15$', timing: '9:00 AM - 4:00 PM' },
        // Add more services as needed
    ]);

    const [selectedService, setSelectedService] = useState(null);

    const handleEdit = (service) => {
        setSelectedService(service);
    };

    const handleDelete = (serviceId) => {
        setServices((prevServices) => prevServices.filter((service) => service.id !== serviceId));
    };

    const handleSave = (editedService) => {
        setServices((prevServices) =>
            prevServices.map((service) => (service.id === editedService.id ? editedService : service))
        );
        setSelectedService(null);
    };

    return (
        <>
        <Anavbar/>
        <div className="view-service-page">
            <h1 >View Service Page</h1>

            {selectedService ? (
                <EditService service={selectedService} onSave={handleSave} />
            ) : (
                <>
                    <ServiceList services={services} onEdit={handleEdit} onDelete={handleDelete} />
                </>
            )}

            {/* Back to Dashboard button */}
            <Link to="/Homepage">
                <button className="back-to-dashboard-button">Back to Dashboard</button>
            </Link>
        </div>
        </>
    );
}

export default ViewService;

