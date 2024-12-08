import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProject.css';

const AddProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = { name, description, startDate, endDate, status };
        try {
            await fetch('http://localhost:8081/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProject),
            });
            alert('Project added successfully!');
            navigate('/'); // Navigate back to the dashboard
        } catch (error) {
            console.error('Error adding project:', error);
            alert('Failed to add project.');
        }
    };

    return (
        <div className="add-project-container">
            <div className="add-project-card">
                <h2>Create New Project</h2>
                <form onSubmit={handleSubmit} className="project-form">
                    <div className="form-group">
                        <div className="label-input-container">
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Enter project name"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label-input-container">
                            <label>Description:</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                placeholder="Enter project description"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label-input-container">
                            <label>Start Date:</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label-input-container">
                            <label>End Date:</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="label-input-container">
                            <label>Status:</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Not Started">Not Started</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Add Project</button>
                </form>
            </div>
        </div>
    );
};

export default AddProject;
