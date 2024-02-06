// src/components/EditService.jsx
import React, { useState } from 'react';
import '../assets/css/EditService.css';

function EditService({ service, onSave }) {
    const [editedService, setEditedService] = useState(service);

    const handleSave = () => {
        onSave(editedService);
    };

    return (
        <div className="edit-service">
            <h1>Edit Service</h1>
            <form>
                {/* Render the editable fields here */}
                <label htmlFor="serviceName">Service Name:</label>
                <input
                    type="text"
                    id="serviceName"
                    value={editedService.name}
                    onChange={(e) => setEditedService({ ...editedService, name: e.target.value })}
                    required
                />

                <label htmlFor="serviceDescription">Service Description:</label>
                <textarea
                    id="serviceDescription"
                    value={editedService.description}
                    onChange={(e) => setEditedService({ ...editedService, description: e.target.value })}
                    required
                />

                <label htmlFor="extraCharges">Extra Charges:</label>
                <input
                    type="text"
                    id="extraCharges"
                    value={editedService.extraCharges}
                    onChange={(e) => setEditedService({ ...editedService, extraCharges: e.target.value })}
                    required
                />

                <label htmlFor="timing">Timing:</label>
                <input
                    type="text"
                    id="timing"
                    value={editedService.timing}
                    onChange={(e) => setEditedService({ ...editedService, timing: e.target.value })}
                    required
                />

                <button type="button" onClick={handleSave}>
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default EditService;
