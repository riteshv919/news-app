// src/Components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About the News App</h2>
      <p>
        Welcome to the <strong>News App</strong>! This application allows users to stay updated with the latest news articles from various categories. You can view breaking news, search for specific topics, and even save your favorite articles for later. The app fetches data from multiple APIs, ensuring the latest news is always available at your fingertips.
      </p>
      <p>
        The main features of the News App include:
      </p>
      <ul>
        <li>Real-time news updates from various categories (e.g., sports, technology, business, etc.).</li>
        <li>Search functionality to find articles on specific topics.</li>
        <li>Save your favorite articles for easy access later.</li>
        <li>Dark and light themes to enhance the user experience.</li>
      </ul>

      <h3>About Me</h3>
      <p>
        I am <strong>Ritesh Vyawahare</strong>, a second-year student at <strong>Shri Guru Gobind Singhji Institute of Engineering and Technology</strong>. As a software development enthusiast, I created this News App as part of my journey to learn full-stack web development. The app is built using technologies such as React, Node.js, MongoDB, and Material UI.
      </p>
      <p>
        Through this app, I am able to demonstrate my skills in integrating third-party APIs, building dynamic user interfaces, and implementing features such as news categorization, search, and saving articles.
      </p>
      <h3>Contact Information</h3>
      <p>
        <strong>Email:</strong> <a href="mailto:riteshv919@gmail.com">riteshv919@gmail.com</a>
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:+919325396508">+91 9325396508</a>
      </p>
    </div>
  );
};

export default About;
