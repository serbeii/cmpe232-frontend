import React from 'react';
import { AdminQuadrant, AdminScreen } from './AdminScreen';
import Quadrant1 from './AdminQuadrants/Quadrant1';
import Quadrant2 from './AdminQuadrants/Quadrant2';
import Quadrant3 from './AdminQuadrants/Quadrant3';
import Quadrant4 from './AdminQuadrants/Quadrant4';
import './AdminScreen.css';

const AdminPage = () => {
  const quadrantContents = [
    <AdminQuadrant
      quadrantTitle="Quadrant 1"
      quadrantContent={<Quadrant1 />}
    />,
    <AdminQuadrant
      quadrantTitle="Quadrant 2"
      quadrantContent={<Quadrant2 />}
    />,
    <AdminQuadrant
      quadrantTitle="Quadrant 3"
      quadrantContent={<Quadrant3 />}
    />,
    <AdminQuadrant
      quadrantTitle="Quadrant 4"
      quadrantContent={<Quadrant4 />}
    />,
  ];


  return (
    <div>
      <AdminScreen quadrantContents={quadrantContents} />
    </div>
  );
};

export default AdminPage;
