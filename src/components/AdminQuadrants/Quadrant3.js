import axios from 'axios';
import React, { useState } from 'react';
import './Quadrant3.css';

const Quadrant3 = () => {
  const [formInputs, setFormInputs] = useState(Array(44).fill(''));

  const handleFormInputChange = (index, value) => {
    const newFormInputs = [...formInputs];
    newFormInputs[index] = value;
    setFormInputs(newFormInputs);
  };

  const sendFormToAPI = async (formInputs) => {

      console.log(formInputs[42]);
    const payload = {
      title: formInputs[43],
      releaseDate: formInputs[41],
      genre: formInputs[40],
      artistName: formInputs[42]
    };

      console.log(payload);
    try {
      const reply = await axios.post('http://localhost:8085/api/v1/album/add', payload);
      console.log(reply.data); 
    } catch (error) {
      console.error(error);
    }
  };

  const renderFormButtons = () => {
    const forms = [];

    // Songs 0-19
    for (let i = 0; i <= 19; i++) {
      forms.push(
        <div key={i}>
          <input
            type="text"
            placeholder={`Song ${i + 1}`}
            value={formInputs[i]}
            onChange={(e) => handleFormInputChange(i, e.target.value)}
          />
        </div>
      );
    }

    // Durations 20-39
    for (let i = 20; i <= 39; i++) {
      forms.push(
        <div key={i}>
          <input
            type="text"
            placeholder={`Duration ${i - 19}`}
            value={formInputs[i]}
            onChange={(e) => handleFormInputChange(i, e.target.value)}
          />
        </div>
      );
    }

    // Genre (40)
    forms.push(
      <div key={40}>
        <input
          type="text"
          placeholder="Genre"
          value={formInputs[40]}
          onChange={(e) => handleFormInputChange(40, e.target.value)}
        />
      </div>
    );

    // Registration Date (41)
    forms.push(
      <div key={41}>
        <input
          type="text"
          placeholder="Registration Date"
          value={formInputs[41]}
          onChange={(e) => handleFormInputChange(41, e.target.value)}
        />
      </div>
    );

    // Artist Name (42)
    forms.push(
      <div key={42}>
        <input
          type="text"
          placeholder="Artist Name"
          value={formInputs[42]}
          onChange={(e) => handleFormInputChange(42, e.target.value)}
        />
      </div>
    );

    // Title (43)
    forms.push(
      <div key={43}>
        <input
          type="text"
          placeholder="Title"
          value={formInputs[43]}
          onChange={(e) => handleFormInputChange(43, e.target.value)}
        />
      </div>
    );

    // Submission button moved to the top
    forms.unshift(
      <div key={44}>
        <button onClick={() => sendFormToAPI(formInputs)} className="admin-button">
          Send Forms to localhost:8085/api/v1/album/makeAlbum
        </button>
      </div>
    );

    return forms;
  };

  return <div className="quadrant3-container">{renderFormButtons()}</div>;
};

export default Quadrant3;
