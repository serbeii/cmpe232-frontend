import React, { useState } from 'react';

const UserForm = () => {
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

 const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/home/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      // Check if the response is not OK
      if (!response.ok) {
        console.error('Error logging in:', response.statusText);
        return;
      }

      const data = await response.json();

      // Check if data is not empty before parsing
      if (!data) {
        console.error('Empty response received during login');
        return;
      }

      console.log('Login response:', data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }; 
    
  return (
    <div>
      <form onSubmit={handleRegisterSubmit}>
        <h2>Register</h2>
        <label>
          Username:
          <input
            type="text"
            value={registerData.username}
            onChange={(e) =>
              setRegisterData({ ...registerData, username: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserForm;
