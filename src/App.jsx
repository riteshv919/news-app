import React from 'react';
import Navbar from './Components/Navbar.jsx';
import NewsBoard from './Components/NewsBoard';
import { ThemeProvider } from './context/ThemeContext';
import { NewsProvider } from './context/NewsContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavedNews from './pages/SavedNews';
import './App.css';


const App = () => {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsBoard />} />
            <Route path="/saved" element={<SavedNews />} />
          </Routes>
        </Router>
      </NewsProvider>
    </ThemeProvider>
  );
};

export default App;
