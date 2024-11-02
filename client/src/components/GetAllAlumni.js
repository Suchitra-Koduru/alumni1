// src/components/AlumniList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AlumniList() {
    const [alumni, setAlumni] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const response = await axios.get('http://localhost:5000/alumni/get');
                setAlumni(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching alumni data:", error);
                setError("Error fetching alumni data");
                setLoading(false);
            }
        };
        fetchAlumni();
    }, []);

    if (loading) return <p>Loading alumni data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: '80px' }}>
            <h2>Alumni Details</h2>
            <button onClick={() => navigate('/add-alumni')} style={buttonStyle}>Add Alumni</button>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={tableHeader}>Name</th>
                        <th style={tableHeader}>Email</th>
                        <th style={tableHeader}>Graduation Year</th>
                        <th style={tableHeader}>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {alumni.map((alumnus) => (
                        <tr key={alumnus._id}>
                            <td style={tableCell}>{alumnus.name}</td>
                            <td style={tableCell}>{alumnus.email}</td>
                            <td style={tableCell}>{alumnus.graduationYear}</td>
                            <td style={tableCell}>{alumnus.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px'
};

const tableHeader = {
    padding: '10px',
    borderBottom: '2px solid #ccc',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'left'
};

const tableCell = {
    padding: '8px',
    borderBottom: '1px solid #ddd'
};

export default AlumniList;
