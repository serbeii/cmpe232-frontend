import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quadrant4 = ({ albumTitle }) => {
    const [albumDTOs, setAlbumDTOs] = useState([]);
    const [artistName, setArtistName] = useState('');

    useEffect(() => {

        const fetchData = async () => {
            try {
                if (albumTitle) {
                    const artistResponse = await axios.get(`http://localhost:8085/api/v1/artist/getArtistNameByAlbum/${albumTitle}`);
                    setArtistName(artistResponse.data);

                    const payload = {
                        artistName: artistResponse.data
                    };

                    console.log('Payload:', payload);

                    const discographyResponse = await axios.post('http://localhost:8085/api/v1/user/viewArtistDiscographyInCollection', null, {
                        params: payload
                    });

                    const fetchedAlbumDTOs = discographyResponse.data;
                    setAlbumDTOs(fetchedAlbumDTOs);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [albumTitle]);

    return (
        <div>
            <div>
                <h2>Discography of artist {artistName}</h2>
                <ul>
                    {albumDTOs.map(album => (
                        <li key={album.id}>
                            <strong>Title:</strong> {album.title},
                            <strong>Genre:</strong> {album.genre},
                            <strong>Release Date:</strong> {album.releaseDate},
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Quadrant4;
