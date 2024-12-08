import React from 'react';
import './ProjectList.css';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list-container">
            <h2>Projects</h2>
            {projects && projects.length > 0 ? (
                <div className="project-cards">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <table className="project-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{project.name}</td>
                                        <td>{project.description}</td>
                                        <td>{new Date(project.startDate).toLocaleDateString()}</td>
                                        <td>{new Date(project.endDate).toLocaleDateString()}</td>
                                        <td>{project.status}</td>
                                        <td>
                                            <div className="project-actions">
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-projects-message">No projects available</p>
            )}
        </div>
    );
};

export default ProjectList;
