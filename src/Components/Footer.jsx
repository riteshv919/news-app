import React from "react";
import { Container, Typography, Box, Link, IconButton } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";  // Import social media icons from react-icons

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "#fff", padding: "20px 0", marginTop: "auto" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {/* Brand Name - Updated to India News */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            India News
          </Typography>
          
          {/* Footer Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="/"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "#ffa500" } }}  // Hover effect for links
            >
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "#ffa500" } }}
            >
              About
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "#ffa500" } }}
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              color="inherit"
              underline="hover"
              sx={{ "&:hover": { color: "#ffa500" } }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>

        {/* Social Media Links */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, marginTop: 2 }}>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            color="inherit"
            sx={{
              "&:hover": { color: "#3b5998" }  // Facebook hover color
            }}
          >
            <FaFacebook size={24} />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            color="inherit"
            sx={{
              "&:hover": { color: "#1da1f2" }  // Twitter hover color
            }}
          >
            <FaTwitter size={24} />
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            color="inherit"
            sx={{
              "&:hover": { color: "#e4405f" }  // Instagram hover color
            }}
          >
            <FaInstagram size={24} />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} India News. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
