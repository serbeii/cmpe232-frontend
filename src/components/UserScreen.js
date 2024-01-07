import React from 'react';
import './Quadrant.css';


const UserQuadrant = ({ quadrantContent }) => {
    return (
        <div className="quadrant">
            {quadrantContent}
        </div>
    );
};


const UserScreen = ({ quadrantContents }) => {
    return (
        <div className="user-screen">
            {quadrantContents.map((content, index) => (
                <div key={index} className={`q${index + 1}`}>
                    {content}
                </div>
            ))}
        </div>
    );
};

export { UserQuadrant, UserScreen };
