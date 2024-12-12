// src/Components/CategoryDropdown.jsx
import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const CategoryDropdown = () => {
  const { setCategory } = useContext(NewsContext);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <h4>Select Category</h4>
      <button onClick={() => handleCategoryChange('general')}>General</button>
      <button onClick={() => handleCategoryChange('business')}>Business</button>
      <button onClick={() => handleCategoryChange('technology')}>Technology</button>
      <button onClick={() => handleCategoryChange('sports')}>Sports</button>
    </div>
  );
};

export default CategoryDropdown;
