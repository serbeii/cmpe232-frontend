import React, { useState } from 'react';

const Quadrant3 = ({ sendFormToAPI }) => {
  const [formInput, setFormInput] = useState('');

  return (
    <div>
      <button onClick={() => sendFormToAPI(formInput)} className="admin-button">
        Send Form to localhost:8085/api/v1/album/makeAlbum
      </button>
    </div>
  );
};

export default Quadrant3;
