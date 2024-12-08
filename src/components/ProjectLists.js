import React from 'react';
import './ProjectList.css';

const ProjectList = ({ projects, onEdit, onDelete }) => {
    return (
        <div className="project-list-container">
            <h2>Projects</h2>
            {projects && projects.length > 0 ? (
                <div className="project-cards">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <p>
                                <strong>Start:</strong> {new Date(project.startDate).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>End:</strong> {new Date(project.endDate).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Status:</strong> {project.status}
                            </p>
                            <div className="project-actions">
                                {onEdit && <button onClick={() => onEdit(project.id)}>Edit</button>}
                                {onDelete && <button onClick={() => onDelete(project.id)}>Delete</button>}
                            </div>
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
