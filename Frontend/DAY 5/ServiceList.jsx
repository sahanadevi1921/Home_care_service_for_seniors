// src/components/ServiceList.jsx
import React from 'react';
import '../assets/css/ServiceList.css';

function ServiceList({ services, onEdit, onDelete }) {
    return (
        <div className="service-list">
            <ul>
                {services.map((service) => (
                    <li key={service.id}>
                        <strong>{service.name}</strong> - {service.description}
                        <button onClick={() => onEdit(service)}>Edit</button>
                        <button onClick={() => onDelete(service.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ServiceList;

