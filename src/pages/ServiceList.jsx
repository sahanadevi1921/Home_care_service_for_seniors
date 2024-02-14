// proper code:
// import React from 'react';
// import '../assets/css/ServiceList.css';

// function ServiceList({ services, onEdit, onDelete }) {
//     const handleDelete = (serviceType) => {
//         // Call the onDelete function with the serviceType
//         onDelete(serviceType);
//     };

//     return (
//         <div className="service-list">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Service Type</th>
//                         <th>Description</th>
//                         <th>Charges</th>
//                         <th>Timing</th>
//                         <th>Service Availability</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {services.map((service) => (
//                         <tr key={service.serviceType}>
//                             <td>{service.serviceType}</td>
//                             <td>{service.serviceDescription}</td>
//                             <td>{service.charge}</td>
//                             <td>{service.duration}</td>
//                             <td>{service.available ? 'Available' : 'Not Available'}</td>
//                             <td>
//                                 <button onClick={() => onEdit(service)}>Edit</button>
//                                 {/* Pass serviceType to handleDelete */}
//                                 <button onClick={() => handleDelete(service.serviceType)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ServiceList;

// ServiceList.jsx
import React from 'react';
import '../assets/css/ServiceList.css'; // Import your CSS file

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div className="service-list">
      {services.map((service) => (
        <div className={`service-card ${service.available ? 'available' : 'not-available'}`} key={service.id}>
          <h2>{service.serviceType}</h2>
          <p>Description: {service.serviceDescription}</p>
          <p>Charge: {service.charge}</p>
          <p>Duration: {service.duration}</p>
          <p>Availability: {service.available ? 'Available' : 'Not Available'}</p>
          <p>Iamge url: {service.image}</p>
          <button
            onClick={() => onEdit(service)}
            style={{
              backgroundColor: '#28a745', // Green color
              color: 'white',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '5px',
            }}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(service.serviceType)}
            style={{
              backgroundColor: '#dc3545', // Red color
              color: 'white',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;



// import React from 'react';
// import '../assets/css/ServiceList.css';

// function ServiceList({ services, onEdit, onDelete }) {
//     return (
//         <div className="service-list">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Service Type</th>
//                         <th>Description</th>
//                         <th>Charges</th>
//                         <th>Timing</th>
//                         <th>Service Availability</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {services.map((service) => (
//                         <tr key={service.serviceId}>
//                             <td>{service.serviceType}</td>
//                             <td>{service.serviceDescription}</td>
//                             <td>{service.charge}</td>
//                             <td>{service.duration}</td>
//                             <td>{service.available}</td>
//                             <td>
//                                 <button onClick={() => onEdit(service)}>Edit</button>
//                                 <button onClick={() => onDelete(service.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ServiceList;




// import React from 'react';
// import '../assets/css/ServiceList.css';

// function ServiceList({ services, onEdit, onDelete }) {
//     const handleDelete = (serviceType) => {
//         // Call the onDelete function with the serviceType
//         onDelete(serviceType);
//     };

//     return (
//         <div className="service-list">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Service Type</th>
//                         <th>Description</th>
//                         <th>Charges</th>
//                         <th>Timing</th>
//                         <th>Service Availability</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {services.map((service) => (
//                         <tr key={service.serviceType}>
//                             <td>{service.serviceType}</td>
//                             <td>{service.serviceDescription}</td>
//                             <td>{service.charge}</td>
//                             <td>{service.duration}</td>
//                             <td>{service.available}</td>
//                             <td>
//                                 <button onClick={() => onEdit(service)}>Edit</button>
//                                 <button onClick={() => handleDelete(service.serviceType)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ServiceList;












// firstcode
// // src/components/ServiceList.jsx
// import React from 'react';
// import '../assets/css/ServiceList.css';

// function ServiceList({ services, onEdit, onDelete }) {
//     return (
//         <div className="service-list">
//             <ul>
//                 {services.map((service) => (
//                     <li key={service.id}>
//                         <strong>{service.name}</strong> - {service.description}
//                         <button onClick={() => onEdit(service)}>Edit</button>
//                         <button onClick={() => onDelete(service.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ServiceList;


