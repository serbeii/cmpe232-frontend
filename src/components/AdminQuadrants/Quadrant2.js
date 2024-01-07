import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quadrant2 = ({refreshFlag}) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/api/v1/album/getAlbums')
      .then(response => {
        setAlbums(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, [refreshFlag]);

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.albumId}>
            <strong>Title:</strong> {album.albumTitle} | 
            <strong> Artist ID:</strong> {album.artist.artistId} | 
            <strong> Genre:</strong> {album.genre} | 
            <strong> Release Date:</strong> {album.releaseDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quadrant2;
