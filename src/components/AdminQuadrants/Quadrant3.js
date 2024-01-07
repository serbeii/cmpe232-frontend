import axios from 'axios';
import React, { useState } from 'react';
import './Quadrant3.css';

const Quadrant3 = ({ setRefreshFlag }) => {
    const [formInputs, setFormInputs] = useState(Array(44).fill(''));

    const handleFormInputChange = (index, value) => {
        const newFormInputs = [...formInputs];
        newFormInputs[index] = value;
        setFormInputs(newFormInputs);
    };

    const sendFormToAPI = async (formInputs) => {

        const payload = {
            albumDTO: {
                title: formInputs[0],
                artistName: formInputs[1],
                genre: formInputs[2],
                releaseDate: formInputs[3]
            },
            songDTO: []
        };

        for (let i = 4; i <= 23; i++) {
            const currentFormValue = formInputs[i];
            const equivalentIndex = i + 20;

            if (currentFormValue === null || formInputs[equivalentIndex] === null || formInputs[equivalentIndex] === "") {
                break;
            }

            payload.songDTO.push({
                song_title: currentFormValue,
                duration: formInputs[equivalentIndex]
            });
        }

        try {
            const reply = await axios.post('http://localhost:8085/api/v1/album/add', payload, { headers: { 'Content-Type': 'application/json' } });
            console.log(reply.data);
        } catch (error) {
            console.error(error);
        }
        finally {
            setRefreshFlag();
        }
    };

    const renderFormButtons = () => {
        const forms = [];

        // Title (0)
        forms.push(
            <div key={0}>
                <input
                    type="text"
                    placeholder="Title"
                    value={formInputs[0]}
                    onChange={(e) => handleFormInputChange(0, e.target.value)}
                />
            </div>
        );

        // Artist Name (1)
        forms.push(
            <div key={1}>
                <input
                    type="text"
                    placeholder="Artist Name"
                    value={formInputs[1]}
                    onChange={(e) => handleFormInputChange(1, e.target.value)}
                />
            </div>
        );

        // Genre (2)
        forms.push(
            <div key={2}>
                <input
                    type="text"
                    placeholder="Genre"
                    value={formInputs[2]}
                    onChange={(e) => handleFormInputChange(2, e.target.value)}
                />
            </div>
        );

        // Release Date (3)
        forms.push(
            <div key={3}>
                <input
                    type="text"
                    placeholder="ReleaseDate"
                    value={formInputs[3]}
                    onChange={(e) => handleFormInputChange(3, e.target.value)}
                />
            </div>
        );

        // Songs 4-23
        for (let i = 4; i <= 23; i++) {
            forms.push(
                <div key={i}>
                    <input
                        type="text"
                        placeholder={`Song ${i - 3}`}
                        value={formInputs[i]}
                        onChange={(e) => handleFormInputChange(i, e.target.value)}
                    />
                </div>
            );
        }

        // Durations 20-39
        for (let i = 24; i <= 43; i++) {
            forms.push(
                <div key={i}>
                    <input
                        type="text"
                        placeholder={`Duration ${i - 23}`}
                        value={formInputs[i]}
                        onChange={(e) => handleFormInputChange(i, e.target.value)}
                    />
                </div>
            );
        }

        // Submission button moved to the top
        forms.unshift(
            <div key={44}>
                <button onClick={() => sendFormToAPI(formInputs)} className="admin-button">
                    CREATE ALBUM
                </button>
            </div>
        );

        return forms;
    };

    return <div className="quadrant3-container">{renderFormButtons()}</div>;
};

export default Quadrant3;
