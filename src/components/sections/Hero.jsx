import React from "react";
import { Box } from "@mui/material";
import HeroImage from "../../assets/food3.jpg";

const Hero = () => {
  return (
    <Box sx={{ height: "40vh" }}>
      <img
        src={HeroImage}
        alt="hero"
        className="imgHeader"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Hero;
