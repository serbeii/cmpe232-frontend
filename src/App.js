import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';

//const AdminPage = () => <div>Admin Page</div>;
//const UserPage = () => <div>User Page</div>;

const App = () => {
    const [userRoles, setUserRoles] = useState([]);

    const handleLoginSuccess = (newRole) => {
        setUserRoles([newRole]);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<LoginForm onLoginSuccess={handleLoginSuccess} />}
                />
                <Route
                    path="/admin"
                    element={userRoles.includes('ADMIN') ? <AdminPage /> : <Navigate to="/" replace />}
                />
                <Route
                    path="/user"
                    element={userRoles.includes('USER') ? <UserPage /> : <Navigate to="/" replace />}
                />
            </Routes>
        </Router>
    );
};

export default App;
