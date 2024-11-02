// src/components/AddAlumniForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddAlumniForm() {
    const [newAlumni, setNewAlumni] = useState({
        name: '',
        email: '',
        graduationYear: '',
        department: ''
    });
    const navigate = useNavigate();

    const handleAddAlumni = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/alumni/add', newAlumni);
            navigate('/getAllAlumni'); // Navigate back to alumni list after submission
        } catch (error) {
            console.error("Error adding alumni:", error);
            alert("Failed to add alumni");
        }
    };

    return (
        <div style={{ padding: '80px' }}>
            <h2>Add Alumni</h2>
            <form onSubmit={handleAddAlumni} style={formStyle}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={newAlumni.name}
                        onChange={(e) => setNewAlumni({ ...newAlumni, name: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={newAlumni.email}
                        onChange={(e) => setNewAlumni({ ...newAlumni, email: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Graduation Year:
                    <input
                        type="number"
                        value={newAlumni.graduationYear}
                        onChange={(e) => setNewAlumni({ ...newAlumni, graduationYear: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Department:
                    <input
                        type="text"
                        value={newAlumni.department}
                        onChange={(e) => setNewAlumni({ ...newAlumni, department: e.target.value })}
                        required
                    />
                </label>
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
};

const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px'
};

export default AddAlumniForm;
