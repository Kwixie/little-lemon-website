import React from "react";
import SpecialsCard from "./SpecialsCard";
import { Container, Typography } from "@mui/material";

/* import Chicken from ;
import GreekSallad from ;
import Mozarella from ; */

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

const SpecialsSection = () => {
  return (
    <div>
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
        }}
      >
        {specialsArray.map((dish) => (
          <SpecialsCard key={dish.id} dish={dish} />
        ))}
      </Container>
    </div>
  );
};

export default SpecialsSection;
