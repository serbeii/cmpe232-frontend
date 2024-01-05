import React from 'react';
import './Quadrant.css';


const UserQuadrant = ({ quadrantTitle, quadrantContent }) => {
  return (
    <div className="quadrant">
      <h3>{quadrantTitle}</h3>
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
