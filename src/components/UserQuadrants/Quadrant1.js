import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Quadrant1 = ({ setSelectedAlbumTitle, refreshFlag}) => {
    const [showSearchResults, setShowSearchResults] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [allElements, setAllElements] = useState([]);
    const [username, setUsername] = useState('');
    const user_id = sessionStorage.getItem('User id');

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8085/api/v1/album/searchAlbum/${searchQuery}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setSearchQuery('');
        }
    };

    const handleShowAllElements = useCallback(async () => {
        const allElements = await axios.get(`http://localhost:8085/api/v1/user/viewCollection/${user_id}`);
        setAllElements(allElements.data);
    }, []);

    useEffect(() => {
        handleShowAllElements();
    }, [handleShowAllElements, refreshFlag]);

    const addToCollection = async (result) => {
        const payload = {
            userId: user_id,
            albumTitle: result.title
        }
        try {
            const response = await axios.post(`http://localhost:8085/api/v1/user/addAlbumtoCollection`, payload);
        }
        catch (error) {
            console.log(error);
        }
    };

    const fetchUsername = async () => {
        try {
            const response = await axios.get(`http://localhost:8085/api/v1/user/getUsername/${user_id}`);
            setUsername(response.data);  // Assuming the response contains the data you want to set as the header
        } catch (error) {
            console.error('Error fetching data from the backend:', error);
        }
    };

    useEffect(() => {
        fetchUsername();
    }, []);


    return (
        <div>
            <h1> Current user: {username} </h1>
            <button onClick={() => { setShowSearchResults(!showSearchResults); handleShowAllElements() }}>
                Toggle Menu
            </button>

            {showSearchResults ? (
                <div >
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Enter search query"
                            style={{ width: '300px', marginRight: '10px' }}
                        />
                    </form>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                        <button type="button" onClick={handleSearchSubmit}>Search</button>
                    </div>

                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <strong>Title:</strong> {result.title}, <strong>Release Date:</strong> {result.releaseDate},{' '}
                                <strong>Genre:</strong> {result.genre}, <strong>Artist:</strong> {result.artistName}
                                <button onClick={() => addToCollection(result)} style={{ marginLeft: '10px' }}>
                                    Add to Collection
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <ul>
                        {allElements.map((element) => (
                            <li key={element.id}>
                                <strong>Title:</strong> {element.album_title}, <strong>Release Date:</strong> {element.release_date},{' '}
                                <strong>Genre:</strong> {element.genre}, <strong>Artist:</strong> {element.artist_name}
                                <button onClick={() => { setSelectedAlbumTitle(element.album_title); }}>
                                    View Details
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Quadrant1;
