import React from 'react';
import './Quadrant.css';

const AdminQuadrant = ({ quadrantContent }) => {
    return (
        <div>
            {quadrantContent}
        </div>
    );
};

const AdminScreen = ({ quadrantContents }) => {
    return (
        <div className="admin-screen">
            {quadrantContents.map((content, index) => (
                <div key={index} className="quadrant">
                    {content}
                </div>
            ))}
        </div>
    );
};

export { AdminQuadrant, AdminScreen };
