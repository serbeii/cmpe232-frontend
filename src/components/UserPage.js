import React, {useState} from 'react';
import {UserQuadrant, UserScreen } from './UserScreen';
import Quadrant1 from './UserQuadrants/Quadrant1';
import Quadrant2 from './UserQuadrants/Quadrant2';
import Quadrant3 from './UserQuadrants/Quadrant3';
import Quadrant4 from './UserQuadrants/Quadrant4';
import './Quadrant.css';

const UserPage = () => {
  const [selectedAlbumTitle, setSelectedAlbumTitle] = useState('');
  const [selectedArtistName, setSelectedArtistName] = useState('');

  const quadrantContents = [
    <UserQuadrant
      quadrantTitle="Quadrant 1"
      quadrantContent={<Quadrant1 
        setSelectedAlbumTitle={setSelectedAlbumTitle}
        setSelectedArtistName={setSelectedArtistName}/>}
    />,
    <UserQuadrant
      quadrantTitle="Quadrant 2"
      quadrantContent={<Quadrant2 
       albumTitle={selectedAlbumTitle}/>}
    />,
    <UserQuadrant
      quadrantTitle="Quadrant 3"
      quadrantContent={<Quadrant3 
        albumTitle={selectedAlbumTitle}/>}
    />,
    <UserQuadrant
      quadrantTitle="Quadrant 4"
      quadrantContent={<Quadrant4 />}
        artistName={selectedArtistName} />,
  ];

  return (
    <div>
      <UserScreen quadrantContents={quadrantContents} />
    </div>
  );
};

export default UserPage;

