import React, { useState } from 'react';
import { AdminQuadrant, AdminScreen } from './AdminScreen';
import Quadrant1 from './AdminQuadrants/Quadrant1';
import Quadrant2 from './AdminQuadrants/Quadrant2';
import Quadrant3 from './AdminQuadrants/Quadrant3';
import Quadrant4 from './AdminQuadrants/Quadrant4';
import './Quadrant.css';

const AdminPage = () => {
    const [refreshFlag, setRefreshFlag] = useState(false);

    const refresh = () => {
        setRefreshFlag(true);

        setTimeout(() => {
            setRefreshFlag(false);
        }, 500);
    };

    const quadrantContents = [
        <AdminQuadrant
            quadrantContent={<Quadrant1
                refreshFlag={refreshFlag} />}
        />,
        <AdminQuadrant
            quadrantContent={<Quadrant2
                refreshFlag={refreshFlag} />}
        />,
        <AdminQuadrant
            quadrantContent={<Quadrant3
                setRefreshFlag={refresh} />}
        />,
        <AdminQuadrant
            quadrantContent={<Quadrant4
                setRefreshFlag={refresh} />}
        />,
    ];


    return (
        <div>
            <AdminScreen quadrantContents={quadrantContents} />
        </div>
    );
};

export default AdminPage;
