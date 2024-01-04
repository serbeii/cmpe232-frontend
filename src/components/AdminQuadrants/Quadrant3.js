import React, { useState } from 'react';

const Quadrant3 = () => {
  const [formInput, setFormInput] = useState('');

  return (
    <div>
      <button onClick={() => sendFormToAPI(formInput)} className="admin-button">
        Send Form to localhost:8085/api/v1/album/makeAlbum
      </button>
      {/* Render 22 forms (11 on each side) */}
      {/* Add your form elements here and update the formInput state */}
    </div>
  );
};

export default Quadrant3;
