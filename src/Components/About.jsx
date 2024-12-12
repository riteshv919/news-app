import React from 'react';
import './About.css'; // Add any custom CSS if needed

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>Welcome to my News App! My name is Ritesh Vyawahare, and I'm a passionate web developer currently studying at Shri Guru Gobind Singhji Institute of Engineering and Technology. I created this app to display news articles from various sources in a user-friendly and intuitive manner.</p>

      <h3>My Skills:</h3>
      <ul>
        <li>JavaScript (React.js, Node.js)</li>
        <li>Python</li>
        <li>HTML, CSS</li>
        <li>MongoDB, SQL</li>
        <li>Web Development</li>
        <li>Responsive Design</li>
      </ul>

      <h3>About the Project:</h3>
      <p>This News App allows users to view the latest articles on various topics, save articles for later, and explore news from different categories like Business, Technology, and Sports. It's built using the MERN stack (MongoDB, Express, React, Node.js) to provide a seamless and dynamic user experience.</p>

      <h3>Contact:</h3>
      <p>If you would like to get in touch, feel free to <a href="/contact">contact me</a>.</p>
    </div>
  );
};

export default About;
