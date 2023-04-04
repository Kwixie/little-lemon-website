import { Box } from "@mui/material";
import React from "react";

const DefaultHeader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "hsl(160, 13%, 60%)",
        mb: 6,
        zIndex: "-1",
        position: "relative",
      }}
    ></Box>
  );
};

export default DefaultHeader;
