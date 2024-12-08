import React, { useState } from 'react';
import api from '../services/api'; // Assuming this is your configured Axios instance
import './LoginPage.css'; // Create or update the CSS file

const LoginPage = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('http://localhost:8081/api/auth/login', { email, password });
            const { role, token } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            if (role === 'ADMIN') {
                alert('Welcome Admin!');
                setLoggedIn(true);
            } else {
                alert('Welcome Viewer!');
                setLoggedIn(true);
            }
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className="login-image">
                    <img src="your-image-url-here" alt="Login Visual" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
