import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quadrant2 = () => {
    const [order, setOrder] = useState('ORDER BY user_id DESC');
    const defaultQuery = `SELECT * FROM users ${order}`;
    const [query, setQuery] = useState(defaultQuery);
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    const handleToggle = (keyword) => {
        setSelectedKeywords((prevSelectedKeywords) => {
            let updatedKeywords;

            if (prevSelectedKeywords.includes(keyword)) {
                updatedKeywords = prevSelectedKeywords.filter((kw) => kw !== keyword);
            } else {
                updatedKeywords = [...prevSelectedKeywords, keyword];
            }

            return updatedKeywords;
        });
    };
    // TODO: change this quadrant
    useEffect(() => {
        updateQuery();
    }, [selectedKeywords]);

    const handleOrderByToggle = () => {
        if (order.endsWith('DESC')) {
            setOrder(order.replace('DESC', 'ASC'));
        } else if (order.endsWith('ASC')) {
            setOrder(order.replace('ASC', 'DESC'));
        }
        updateQuery();

    };

    const handleSearch = async () => {
        console.log(query);
        try {
            const response = await axios.get('http://localhost:8085/api/v1/admin/search', query);
            console.log(response.data);
            setSelectedKeywords([]);
            setQuery(defaultQuery);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updateQuery = () => {
        const dynamicQuery = selectedKeywords.length
            ? `SELECT ${selectedKeywords} FROM users`
            : 'SELECT * FROM users';

        const newQuery = `${dynamicQuery} ${order}`;
        setQuery(newQuery);
    };


    return (
        <div>
            {/* Toggle buttons for various keywords */}
            <button onClick={() => handleToggle('AVG')}>AVG</button>
            <button onClick={() => handleToggle('COUNT')}>COUNT</button>
            {/* Add other keyword buttons here (up to 8) */}

            {/* Additional buttons */}
            <button onClick={handleOrderByToggle}>Toggle Order By</button>

            {/* Search button */}
            <button onClick={handleSearch}>Search</button>

            {/* Display the current query for testing purposes */}
            <div>Current Query: {query}</div>
        </div>
    );
};

export default Quadrant2;

