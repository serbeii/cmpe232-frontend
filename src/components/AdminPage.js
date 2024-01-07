import React from 'react';
import { AdminQuadrant, AdminScreen } from './AdminScreen';
import Quadrant1 from './AdminQuadrants/Quadrant1';
import Quadrant2 from './AdminQuadrants/Quadrant2';
import Quadrant3 from './AdminQuadrants/Quadrant3';
import Quadrant4 from './AdminQuadrants/Quadrant4';
import './Quadrant.css';

const AdminPage = () => {
    const quadrantContents = [
        <AdminQuadrant
            quadrantContent={<Quadrant1 />}
        />,
        <AdminQuadrant
            quadrantContent={<Quadrant2 />}
        />,
        <AdminQuadrant
            quadrantContent={<Quadrant3 />}
        />,
        <AdminQuadrant
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
