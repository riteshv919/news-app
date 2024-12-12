// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar.jsx';
import NewsBoard from './Components/NewsBoard';
import SavedNews from './pages/SavedNews';
import About from './Components/About';
import Contact from './Components/Contacts'; // Make sure the file name is `Contact.jsx`
import { ThemeProvider } from './context/ThemeContext';
import { NewsProvider } from './context/NewsContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<NewsBoard />} />
              <Route path="/saved" element={<SavedNews />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contact />} /> {/* Correct route */}
            </Routes>
          </main>
          <Footer />
        </Router>
      </NewsProvider>
    </ThemeProvider>
  );
};

export default App;
