import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }
    setIsSubmitted(true);
    console.log('Message Submitted:', { name, email, message });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      {isSubmitted ? (
        <Typography variant="h5" color="success.main" sx={{ textAlign: 'center' }}>
          Thank you for reaching out! We'll get back to you soon.
        </Typography>
      ) : (
        <>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: 'primary.main' }}>
            Contact Us
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              backgroundColor: '#f9f9f9',
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
                '& .MuiInputLabel-root': {
                  color: 'primary.main',
                },
              }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
                '& .MuiInputLabel-root': {
                  color: 'primary.main',
                },
              }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
                '& .MuiInputLabel-root': {
                  color: 'primary.main',
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              sx={{
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default ContactPage;
