import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quadrant1 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8085/api/v1/admin/view');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Album Collection View</h1>
      {error && <p>{error}</p>}
      {data.length === 0 && !error && <p>Loading...</p>}
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Collection ID</th>
              <th>User ID</th>
              <th>Username</th>
              <th>Album Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              console.log('item:', item); // Log item to the console for debugging
              if (!item || !item.collectionId || !item.user_id || !item.username || !item.albumTitle) {
                return null;
              }
              return (
                <tr key={item.collectionId}>
                  <td>{item.collectionId}</td>
                  <td>{item.user_id}</td>
                  <td>{item.username}</td>
                  <td>{item.albumTitle}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Quadrant1;
