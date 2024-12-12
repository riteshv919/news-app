import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NewsContext } from "../context/NewsContext";

const Navbar = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  const { setCategory, setSearchQuery } = useContext(NewsContext);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`} style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
      <div className="container-fluid">
        {/* Customized logo link */}
        <a className="navbar-brand" href="#" style={{ fontWeight: 'bold', fontSize: '24px', color: '#ff5733' }}> India News</a> {/* Updated Logo Color (Orange) */}
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('general')} style={{ fontSize: '18px', color: '#007bff' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('business')} style={{ fontSize: '18px', color: '#28a745' }}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('technology')} style={{ fontSize: '18px', color: '#ff5733' }}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('sports')} style={{ fontSize: '18px', color: '#ffc107' }}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('health')} style={{ fontSize: '18px', color: '#17a2b8' }}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory('culture')} style={{ fontSize: '18px', color: '#6f42c1' }}>Culture</a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-3" type="search" placeholder="Search News..." aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} style={{ borderRadius: '20px', paddingLeft: '15px', fontSize: '16px', width: '300px' }} />
            <button className="btn btn-outline-info" type="submit" style={{ borderRadius: '20px', fontSize: '16px' }}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
