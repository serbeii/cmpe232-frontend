import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginForm from './components/LoginForm';

const AdminPage = () => <div>Admin Page</div>;
const UserPage = () => <div>User Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <PrivateRoute path="/admin" element={<AdminPage />} allowedRoles={['ADMIN']} />
        <PrivateRoute path="/user" element={<UserPage />} allowedRoles={['USER', 'ADMIN']} />
      </Routes>
    </Router>
  );
};

const PrivateRoute = ({ element: Element, allowedRoles, ...rest }) => {
  // Perform your logic to check if the user has the allowed role
  const hasAllowedRole = /* Logic to check if the user has the allowed role */ true;

  return (
    <Route
      {...rest}
      element={hasAllowedRole ? <Element /> : <Navigate to="/" replace />}
    />
  );
};

export default App;
