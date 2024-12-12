import React from 'react';
import { Container, Typography, Box, Link, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons from react-icons

const AboutPage = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About India News
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to <strong>India News</strong>! This application allows users to stay updated with the latest news articles from various categories. You can view breaking news, search for specific topics, and even save your favorite articles for later. The app fetches data from multiple APIs, ensuring the latest news is always available at your fingertips.
      </Typography>
      <Typography variant="body1" paragraph>
        The main features of the News App include:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Real-time news updates from various categories (e.g., sports, technology, business, etc.)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Search functionality to find articles on specific topics." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Save your favorite articles for easy access later." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dark and light themes to enhance the user experience." />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I am <strong>Ritesh Vyawahare</strong>, a second-year student at <strong>Shri Guru Gobind Singhji Institute of Engineering and Technology</strong>. As a software development enthusiast, I created this News App as part of my journey to learn full-stack web development. The app is built using technologies such as React, Node.js, MongoDB, and Material UI.
      </Typography>
      <Typography variant="body1" paragraph>
        Through this app, I am able to demonstrate my skills in integrating third-party APIs, building dynamic user interfaces, and implementing features such as news categorization, search, and saving articles.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Contact Information
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Email:</strong> 
        <Link href="mailto:riteshv919@gmail.com" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FaEnvelope size={20} />
          riteshv919@gmail.com
        </Link>
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Phone:</strong> 
        <Link href="tel:+919325396508" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FaPhoneAlt size={20} />
          +91 9325396508
        </Link>
      </Typography>

      
      
    </Container>
  );
};

export default AboutPage;
