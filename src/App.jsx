// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar.jsx';
import NewsBoard from './Components/NewsBoard';
import SavedNews from './pages/SavedNews';
import About from './Components/About'; // Ensure correct path
import Contact from './Components/Contacts.jsx'; // Ensure correct path
import { ThemeProvider } from './context/ThemeContext';
import { NewsProvider } from './context/NewsContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'; // Correct path
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
            <Route path="/about" element={<About />} /> {/* Ensure route path is correct */}
            <Route path="/contact" element={<Contact />} /> {/* Ensure route path is correct */}
          </Routes>
          <Footer />
        </Router>
      </NewsProvider>
    </ThemeProvider>
  );
};

export default App;
