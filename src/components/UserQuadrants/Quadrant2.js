import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quadrant2 = ({ albumTitle }) => {
    const [albumData, setAlbumData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (albumTitle) {
                    const response = await axios.get(`http://localhost:8085/api/v1/album/viewAlbum/${albumTitle}`);
                    setAlbumData(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [albumTitle]);
    return (
        <div>
            {albumData && (
                <div>
                    <h2>{albumData.albumDTO.title}</h2>
                    <li>
                        <strong>Artist:</strong> {albumData.albumDTO.artistName},
                        <strong>Genre:</strong> {albumData.albumDTO.genre},
                        <strong>Release Date:</strong> {albumData.albumDTO.releaseDate},
                        <strong>Duration::</strong> {convertSecondsToMinutes(albumData.albumDTO.duration)},                        
                    </li>

                    <h3>Songs</h3>
                    <ul style={{ listStyleType: 'none', padding: '8px', display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '40px', fontSize: '16px' }}>
                        {albumData.songDTO.map((song) => (
                            <li key={song.song_id}>
                                <p>{song.song_title}</p>
                                <p>Duration: {convertSecondsToMinutes(song.duration)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const convertSecondsToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default Quadrant2;
