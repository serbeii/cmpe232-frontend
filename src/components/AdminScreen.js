import React from 'react';
import './AdminScreen.css';

const AdminQuadrant = ({ quadrantTitle, quadrantContent }) => {
  return (
    <div>
      <h3>{quadrantTitle}</h3>
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
