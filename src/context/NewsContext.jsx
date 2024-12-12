import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <NewsContext.Provider value={{ category, setCategory, searchQuery, setSearchQuery }}>
      {children}
    </NewsContext.Provider>
  );
};
