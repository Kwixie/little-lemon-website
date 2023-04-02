import React from "react";
import SpecialsCard from "./SpecialsCard";
import { Container, Typography, Box } from "@mui/material";

const specialsArray = [
  {
    name: "Grilled Chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, asperiores ab explicabo aspernatur consequatur blanditiis rerum velit labore. Cumque asperiores non hic minus quo.",
    price: "$14.99",
    imgUrl: "../../assets/chicken.jpg",
    id: 1,
  },
  {
    name: "Greek Sallad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, asperiores ab explicabo aspernatur consequatur blanditiis rerum velit labore. Cumque asperiores non hic minus quo.",
    price: "$12.49",
    imgUrl: "../../assets/greek-sallad.png",
    id: 2,
  },
  {
    name: "Mozarella Appetizer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, asperiores ab explicabo aspernatur consequatur blanditiis rerum velit labore. Cumque asperiores non hic minus quo.",
    price: "$8.50",
    imgUrl: "../../assets/food.jpg",
    id: 3,
  },
];

// hsl(160, 13%, 45%)

const SpecialsSection = () => {
  return (
    <Box sx={{ backgroundColor: "hsl(50, 91%, 70%)", py: 5 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontSize: "36px",
          display: "block",
          width: "100%",
          textAlign: "center",
          my: 1,
        }}
      >
        This week specials
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "noWrap" },
          justifyContent: { xs: "center", md: "space-between" },
          columnGap: 2,
          my: 2,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        {specialsArray.map((dish) => (
          <SpecialsCard key={dish.id} dish={dish} />
        ))}
      </Container>
    </Box>
  );
};

export default SpecialsSection;
