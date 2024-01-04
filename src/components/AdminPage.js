import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPage.css'

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const uid = sessionStorage.getItem('User id');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8085/api/test/details`, {
          params: {
            userId: uid
          }
        });

        if (response.status === 200) {
          setUsername(response.data);
        } else {
          console.error('Failed to fetch details');
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    // Call the function to fetch user details when the component mounts
    fetchUserDetails();
  }, [uid]); // Trigger the effect when uid changes

  return (
    <div>
      <h1>Welcome to Admin Page</h1>
      <p>Username: {username}</p>
      {/* Add other content as needed */}
    </div>
  );
};

export default AdminPage;
