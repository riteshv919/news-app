import React from "react";
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from "@mui/material";

const Newitem = ({ title, description, src, url }) => {
  return (
    <Card sx={{ width: "50%", margin: "10px auto", height: "100%" }}>
      <CardMedia
        component="img"
        height="100%"  // Increase the height of the image
        image={src}
        alt="news"
        sx={{
          objectFit: "cover",  // Adjust the image to cover the entire area
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Newitem;
