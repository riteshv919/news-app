import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { NewsContext } from '../context/NewsContext';

const Navbar = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  const { setCategory, setSearchQuery } = useContext(NewsContext);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'bg-dark' : 'bg-light'}`} data-bs-theme={isDarkMode ? 'dark' : 'light'}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NewsMag</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => setCategory('general')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('business')}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('technology')}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('sports')}>Sports</a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button onClick={toggleTheme} className="btn btn-outline-secondary ms-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
