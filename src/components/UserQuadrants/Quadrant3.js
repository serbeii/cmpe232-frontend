import axios from 'axios';
import React, { useState } from 'react';

const Quadrant3 = ({ albumTitle }) => {
    const [newUsername, setNewUsername] = useState('');
    const route = 'http://localhost:8085/api/v1/user';
    const userId = sessionStorage.getItem('User id');
    const username = sessionStorage.getItem('username');

    const removeAlbumFromCollection = async () => {
        // Your asynchronous logic for removing the selected album
        const payload = {
            albumTitle: albumTitle,
            userId: userId
        }

        try {
            const response = axios.post(`${route}/deleteAlbumFromCollection`, payload);
        }
        catch (error) {
            console.log(error);
        }

        console.log('Removing selected album from collection');
    };

    const resetCollection = async () => {
        try {
            const response = axios.post(`${route}/deleteEntireCollection`, { userId });
        }
        catch (error) {
            console.log(error);
        }

        console.log('Resetting collection');
    };

    const changeUsername = async () => {
        try {
            const response = axios.post(`${route}/changeUsername/${username}`, { newUsername });
            if (response.status === 200) {
                window.location.reload();
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                <button className="admin-button" onClick={removeAlbumFromCollection}>
                    Remove Selected Album
                </button>
                <button className="admin-button" onClick={resetCollection}>
                    Reset Collection
                </button>

                <button className="admin-button" type="button" onClick={changeUsername}>
                    Change Username
                </button>
                <form className="input-form" onSubmit={(e) => { e.preventDefault(); changeUsername(); }}>
                    <input
                        type="text"
                        placeholder="New Username"
                        value={newUsername}
                        onChange={handleUsernameChange}
                    />
                </form>
            </div>
        </div>
    );
};

export default Quadrant3;
