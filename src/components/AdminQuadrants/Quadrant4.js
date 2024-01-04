import React, { useState } from 'react';

const Quadrant4 = () => {
  const [username, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [artistName, setArtistName] = useState('');


  const handleButtonClick1 = () => {
    // Additional logic or actions related to button 1
  };

  const handleButtonClick2 = () => {
    // Additional logic or actions related to button 2
  };

  const handleButtonClick3 = () => {
    // Additional logic or actions related to button 3
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      <div className='bordered'>
        <button onClick={handleButtonClick1} className="admin-button">
          ADD NEW USER
        </button>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
          </label>
          <br />
          <label>
            Password: 
            <input type="text" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
          </label>
        </form>
      </div>

      <div className='bordered'>
        <button onClick={handleButtonClick2} className="admin-button">
          ADD NEW ARTIST
        </button>
        <form>
          <label>
            Artist Name:
            <input type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
          </label>
        </form>
      </div>

      <div className='bordered'>
        <button onClick={handleButtonClick3} className="admin-button">
         CREATE NEW ADMIN 
        </button>
        <form>
          <label>
            Username:
            <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
          </label>
          <br />
          <label>
            Password: 
            <input type="text" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
          </label>
        </form>
        
      </div>

      <div className='bordered'>
        <button className="admin-button">
          DESTROY DATABASE
        </button>
      </div>
    </div>
  );
};

export default Quadrant4;

