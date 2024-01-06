import React, { useState } from 'react';
import axios from 'axios';

const Quadrant4 = () => {
  const [username, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [artistName, setArtistName] = useState('');
  const [removedArtist, setRemovedArtist] = useState('');
  const [removedUsername, setRemovedUsername] = useState('');
  const [oldUsername, setOldUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const [userAddSuccess, setUserAddSuccess] = useState(false);  
  const [adminAddSuccess, setAdminAddSuccess] = useState(false);  
  const [artistAddSuccess, setArtistAddSuccess] = useState(false);  
  const [artistRemoveSuccess, setArtistRemoveSuccess] = useState(false);  
  const [userRemoveSuccess, setUserRemoveSuccess] = useState(false);  
  const [renameSuccess, setRenameSuccess] = useState(false);  

  const route = 'http://localhost:8085/api/v1/admin';
  const userId = sessionStorage.getItem('User id');

  const addUser = async (event) => {
    event.preventDefault();
    
    const payload = {
      username: username,
      password: userPassword,
    };;

    console.log(`${route}/addUser/${userId}`)
    
    try {
        const response  = await axios.post(`${route}/addUser/${userId}`, payload); 
        
        if (response.status === 200) {
           setUserAddSuccess(true);

        setTimeout(() => {
          setUserAddSuccess(false);
        }, 5000); 
        }
        else {
            console.error('Operation failed');
        }
    } catch (error){
        console.error('Error:', error);
    }
  };

  const addArtist = async (event) => {
    event.preventDefault();
    
    const payload = artistName;

    try {
        const response  = await axios.post(`${route}/addArtist/${userId}`, payload); 
        
        if (response.status === 200) {
           setArtistAddSuccess(true);

        setTimeout(() => {
          setArtistAddSuccess(false);
        }, 5000); 
        }
        else {
            console.error('Operation failed');
        }
    } catch (error){
        console.error('Error:', error);
    }
  }; 

  const addAdmin = async (event) => {
    event.preventDefault();
    
    const payload = {
      username: adminName,
      password: adminPassword,
    }; 

    try {
        const response  = await axios.post(`${route}/addAdmin/${userId}`, payload); 
        
        if (response.status === 200) {
           setAdminAddSuccess(true);

        setTimeout(() => {
          setAdminAddSuccess(false);
        }, 5000); 
        }
        else {
            console.error('Operation failed');
        }
    } catch (error){
        console.error('Error:', error);
    }
  };

  const removeArtist = async (event) => {
    event.preventDefault();
    
    const payload = removedArtist;

    try {
        const response  = await axios.post(`${route}/removeArtist/${userId}`, payload); 
        
        if (response.status === 200) {
           setArtistRemoveSuccess(true);

        setTimeout(() => {
          setArtistRemoveSuccess(false);
        }, 5000); 
        }
        else {
            console.error('Operation failed');
        }
    } catch (error){
        console.error('Error:', error);
    }
  };  

  const updateUsername = async (event) => {
    event.preventDefault();
    
    const payload = {
        oldUsername: oldUsername,
        newUsername: newUsername
    };

    try {
        const response  = await axios.post(`${route}/updateUsername/${userId}`, payload); 
        
        if (response.status === 200) {
           setRenameSuccess(true);

        setTimeout(() => {
          setRenameSuccess(false);
        }, 5000); 
        }
        else {
            console.error('Operation failed');
        }
    } catch (error){
        console.error('Error:', error);
    }
  }; 

    const removeUser = async (event) => {
    event.preventDefault();
    
    const payload = removedUsername;

    try {
        const response  = await axios.post(`${route}/removeUser/${userId}`, payload); 
        
        if (response.status === 200) {
           setUserRemoveSuccess(true);

        setTimeout(() => {
          setUserRemoveSuccess(false);
        }, 5000); 
        }
        else {
            console.error('Operation failed');
        }
    } catch (error){
        console.error('Error:', error);
    }
  }; 

    const removeDatabase = async (event) => {
        event.preventDefault();
        try {
            const response  = await axios.delete(`${route}/resetDatabase/${userId}`);
        }
        finally{
            window.location.reload(); 
        }
    };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <div className='bordered'>
        <button onClick={(e) => addUser(e)} className="admin-button">
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
        {userAddSuccess && (
          <div style={{ marginTop: '10px', color: 'green' }}>
            Operation successful!
          </div>
        )}
      </div>

      <div className='bordered'>
      <button onClick={(e) => addAdmin(e)} className="admin-button">
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
      {adminAddSuccess && (
          <div style={{ marginTop: '10px', color: 'green' }}>
          Operation successful!
          </div>
      )}
      </div>

      <div className='bordered'>
      <button onClick={(e) => updateUsername(e)} className="admin-button">
      UPDATE USERNAME 
      </button>
      <form>
      <label>
      Old Username:
      <input type="text" value={oldUsername} onChange={(e) => setOldUsername(e.target.value)} />
      </label>
      <br />
      <label>
      New Username: 
      <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
      </label>
      </form>
      {renameSuccess && (
          <div style={{ marginTop: '10px', color: 'green' }}>
          Operation successful!
          </div>
      )}
      </div>

      <div className='bordered'>
      <button onClick={(e) => removeUser(e)} className="admin-button">
      REMOVE USER 
      </button>
      <form>
      <label>
      Username:
      <input type="text" value={removedUsername} onChange={(e) => setRemovedUsername(e.target.value)} />
      </label>
      <br />
      </form>
      {userRemoveSuccess && (
          <div style={{ marginTop: '10px', color: 'green' }}>
          Operation successful!
          </div>
      )}
      </div>

      <div className='bordered'>
        <button onClick={(e) => addArtist(e)} className="admin-button">
          ADD NEW ARTIST
        </button>
        <form>
          <label>
            Artist Name:
            <input type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
          </label>
        </form>
       {artistAddSuccess && (
          <div style={{ marginTop: '10px', color: 'green' }}>
            Operation successful!
          </div>
        )} 
      </div>


      <div className='bordered'>
        <button onClick={(e) => removeArtist(e)} className="admin-button">
          REMOVE ARTIST
        </button>
        <form>
          <label>
            Artist Name:
            <input type="text" value={removedArtist} onChange={(e) => setRemovedArtist(e.target.value)} />
          </label>
        </form>
       {artistRemoveSuccess && (
          <div style={{ marginTop: '10px', color: 'green' }}>
            Operation successful!
          </div>
        )} 
      </div>

      <div className='bordered'>
      <button onClick={(e) => removeDatabase(e)} className="admin-button">
      DESTROY DATABASE
      </button>
      </div>

    </div>
  );
};

export default Quadrant4;

