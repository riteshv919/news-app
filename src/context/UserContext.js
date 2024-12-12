// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create context
export const UserContext = createContext();

// UserProvider component to manage user session
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user data exists in localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser); // Load the user from localStorage
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove from localStorage
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
