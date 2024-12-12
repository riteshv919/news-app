import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "#fff", padding: "20px 0", marginTop: "auto" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NewsMag
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="/" color="inherit" underline="hover">Home</Link>
            <Link href="/about" color="inherit" underline="hover">About</Link>
            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
            <Link href="/privacy-policy" color="inherit" underline="hover">Privacy Policy</Link>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} NewsMag. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
