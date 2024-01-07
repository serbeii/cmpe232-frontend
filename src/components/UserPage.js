import React, { useState } from 'react';
import { UserQuadrant, UserScreen } from './UserScreen';
import Quadrant1 from './UserQuadrants/Quadrant1';
import Quadrant2 from './UserQuadrants/Quadrant2';
import Quadrant3 from './UserQuadrants/Quadrant3';
import Quadrant4 from './UserQuadrants/Quadrant4';
import './Quadrant.css';

const UserPage = () => {
    const [selectedAlbumTitle, setSelectedAlbumTitle] = useState('');
    const [refreshFlag, setRefreshFlag] = useState(false);

    const refresh = () => {
        setRefreshFlag(true);
        setTimeout(() => {
            setRefreshFlag(false)
        }, 500);
    };

    const quadrantContents = [
        <UserQuadrant
            quadrantContent={<Quadrant1
                setSelectedAlbumTitle={setSelectedAlbumTitle}
                refreshFlag={refreshFlag}
            />}
        />,
        <UserQuadrant
            quadrantContent={<Quadrant2
                albumTitle={selectedAlbumTitle}
            />}
        />,
        <UserQuadrant
            quadrantContent={<Quadrant3
                albumTitle={selectedAlbumTitle}
                setRefreshFlag={refresh}
            />}
        />,
        <UserQuadrant
            quadrantContent={<Quadrant4
                albumTitle={selectedAlbumTitle}
            />}
        />
    ];

    return (
        <div>
            <UserScreen quadrantContents={quadrantContents} />
        </div>
    );
};

export default UserPage;

