import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the custom CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (event, isLogin) => {
    event.preventDefault();

    const apiEndpoint = isLogin ? '/login' : '/register';
    const payload = { username, password };

    try {
      // Use Axios for the API call
      const response = await axios.post(`http://localhost:8085/api/v1${apiEndpoint}`, payload);

      // Continue with the rest of the logic as before
      if (response.status === 200) {
        const result = response.data;
        const isAdmin = result.isAdmin;

        // Redirect using navigate
        navigate(isAdmin ? '/admin' : '/user');
      } else {
        console.error('Login/Register failed');
      }
    } catch (error) {
      console.error('Error during login/register:', error);
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <button onClick={(e) => handleFormSubmit(e, true)} className="submit-button">
          Login
        </button>
        <button onClick={(e) => handleFormSubmit(e, false)} className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

