// src/utils/auth.js
export const loginUser = async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
  
    const data = await response.json();
    return data; // Assuming data contains the user object
  };
  