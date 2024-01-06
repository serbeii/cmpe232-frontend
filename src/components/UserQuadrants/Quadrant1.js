import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Quadrant1 = () => {
  const [showSearchResults, setShowSearchResults] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allElements, setAllElements] = useState([]);
  const user_id = sessionStorage.getItem('User id'); 

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // Replace 'your-backend-search-endpoint' with the actual endpoint for searching
    const searchResults = await axios.get(`/your-backend-search-endpoint?query=${searchQuery}`);
    setSearchResults(searchResults);
  };

  const handleShowAllElements = useCallback(async () => {
    // Replace 'your-backend-all-elements-endpoint' with the actual endpoint for fetching all elements
    const allElements = await axios.get(`http://localhost:8085/api/v1/user/viewCollection/${user_id}`);
    setAllElements(allElements.data);
      console.log(allElements.data);
  }, []);

  useEffect(() => {
     handleShowAllElements();
  }, [handleShowAllElements]);

  return (
    <div>
      <button onClick={() => setShowSearchResults(!showSearchResults)}>
        Toggle Menu
      </button>

      {showSearchResults ? (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter search query"
            style={{ width: '300px', marginRight: '10px' }}
            />
            </form>
    
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <button type="submit">Search</button>
        </div>

            <ul>
            {searchResults.map((result) => (
                <li key={result.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <span>{result.title}</span>
                    <button onClick={() => console.log(`Button for ${result.title} clicked`)} style={{ marginLeft: '10px' }}>
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
                <button onClick={() => console.log(`Button for ${element.album_title} clicked`)}>
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
