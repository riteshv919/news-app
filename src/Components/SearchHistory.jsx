// src/Components/SearchHistory.jsx
import React, { useState, useEffect } from 'react';

const SearchHistory = ({ setSearchQuery }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const handleSearchClick = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h4>Search History</h4>
      <ul>
        {history.map((query, idx) => (
          <li key={idx} onClick={() => handleSearchClick(query)}>
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
