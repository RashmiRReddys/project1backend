import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectList from './ProjectList';
import { FaProjectDiagram, FaUserCircle } from 'react-icons/fa'; // Import the icons
import './Dashboard.css';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [profileMenuVisible, setProfileMenuVisible] = useState(false); // State to toggle profile menu
    const role = localStorage.getItem('role'); // Get the role from localStorage
    const email = localStorage.getItem('email'); // Get the email from localStorage
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('http://localhost:8081/api/projects');
            const data = await response.json();
            setProjects(data);
        };

        fetchProjects();
    }, []);

    const handleAddProject = () => {
        navigate('/add-project');
    };

    const handleSidebarToggle = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleProfileMenu = () => {
        setProfileMenuVisible(!profileMenuVisible);
    };

    const handleLogout = () => {
        localStorage.clear(); // Clear the local storage
        navigate('/login-page'); // Navigate to login page
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dashboard-header">
                <div className="hamburger-menu" onClick={handleSidebarToggle}>
                    ☰ {/* 3-line icon */}
                </div>
                <h1 className="page-title">Dashboard</h1>

                {/* Profile Icon */}
                <div className="profile-icon" onClick={toggleProfileMenu}>
                    <FaUserCircle size={30} color="white" />
                </div>
                
                {/* Profile Menu */}
                {profileMenuVisible && (
                    <div className="profile-menu">
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Role:</strong> {role}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </header>

            {/* Sidebar */}
            <div className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
                <ul>
                    <li onClick={() => navigate('/add-user')}>Add User</li>
                    <li onClick={() => navigate('/add-project')}>Add Project</li>
                    <li onClick={() => navigate('/reports')}>Reports</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className={`main-content ${sidebarVisible ? 'sidebar-active' : ''}`}>
                {role === 'ADMIN' && (
                    <button className="add-project-button" onClick={handleAddProject}>
                        Add Project
                    </button>
                )}

                {/* Project Count Card */}
                <div className="project-count-card">
                    <FaProjectDiagram size={40} />
                    <div>
                        <p className="project-count">{projects.length}</p>
                        <span>Projects</span>
                    </div>
                </div>

                {/* Project List */}
                <div className="project-cube">
                    <ProjectList projects={projects} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
