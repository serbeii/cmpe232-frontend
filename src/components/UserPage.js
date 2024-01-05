import React from 'react';
import {UserQuadrant, UserScreen } from './UserScreen';
import Quadrant1 from './UserQuadrants/Quadrant1';
import Quadrant2 from './UserQuadrants/Quadrant2';
import Quadrant3 from './UserQuadrants/Quadrant3';
import Quadrant4 from './UserQuadrants/Quadrant4';
import './Quadrant.css';

const UserPage = () => {
  const quadrantContents = [
    <UserQuadrant
      quadrantTitle="Quadrant 1"
      quadrantContent={<Quadrant1 />}
    />,
    <UserQuadrant
      quadrantTitle="Quadrant 2"
      quadrantContent={<Quadrant2 />}
    />,
    <UserQuadrant
      quadrantTitle="Quadrant 3"
      quadrantContent={<Quadrant3 />}
    />,
    <UserQuadrant
      quadrantTitle="Quadrant 4"
      quadrantContent={<Quadrant4 />}
    />,
  ];

  return (
    <div>
      <UserScreen quadrantContents={quadrantContents} />
    </div>
  );
};

export default UserPage;

