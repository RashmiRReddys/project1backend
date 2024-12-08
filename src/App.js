import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AddProject from './components/AddProject';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                {!loggedIn ? (
                    <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
                ) : (
                    <>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/add-project" element={<AddProject />} />
                        <Route path="/login-page" element={<LoginPage />} />

                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;
