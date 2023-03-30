import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import HeroImage from "../../assets/food3.jpg";

const Hero = () => {
  return (
    <Box sx={{ height: "40vh" }}>
      <img
        src={HeroImage}
        alt="hero"
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

/* sx={{
  backgroundColor: "hsl(160, 13%, 45%)",
  display: "flex",
}}
>
<Container
  sx={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  }}
>
  <Box>
    <Typography variant="h2" sx={{ color: "#fff", textAlign: "center" }}>
      Monday Special
    </Typography>
    <Typography variant="h3" sx={{ color: "#fff", textAlign: "center" }}>
      20% off on takeaway!
    </Typography>
  </Box>
  <Box>

  </Box>
</Container> */
