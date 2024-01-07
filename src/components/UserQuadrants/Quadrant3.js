import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quadrant3 = ({ albumTitle, setRefreshFlag }) => {
    const [newUsername, setNewUsername] = useState('');
    const route = 'http://localhost:8085/api/v1/user';
    const userId = sessionStorage.getItem('User id');
    const username = sessionStorage.getItem('username');
    const navigate = useNavigate();

    const removeAlbumFromCollection = async () => {
        const payload = {
            albumTitle: albumTitle,
            userId: userId
        }

        try {
            const response = await axios.post(`${route}/deleteAlbumFromCollection`, payload);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setRefreshFlag();
        }

        console.log('Removing selected album from collection');
    };

    const resetCollection = async () => {
        try {
            const response = await axios.post(`${route}/deleteEntireCollection`, { userId });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setRefreshFlag();
        }

        console.log('Resetting collection');
    };

    const changeUsername = async () => {
        try {
            const response = await axios.post(`${route}/changeUsername/${username}`, { newUsername });
            if (response.status === 200) {
                console.log('success');
                navigate('/');
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
