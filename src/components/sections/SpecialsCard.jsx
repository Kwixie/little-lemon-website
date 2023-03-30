import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";

import Chicken from "../../assets/chicken.jpg";
import GreekSallad from "../../assets/greek-sallad.png";
import Mozarella from "../../assets/food.jpg";

const SpecialsCard = ({ dish }) => {
  const { name, price, description, id } = dish;
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (id === 1) {
      setImgUrl(Chicken);
    } else if (id === 2) {
      setImgUrl(GreekSallad);
    } else {
      setImgUrl(Mozarella);
    }
  }, []);

  return (
    <Card sx={{ maxWidth: 345, my: 2 }}>
      <CardActionArea href="/menu">
        <CardMedia component="img" height="140" image={imgUrl} alt={name} />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SpecialsCard;

// C:\Users\mlikb\OneDrive\Programming\little-lemon-website\
