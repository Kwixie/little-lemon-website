import React from "react";
import ReservationForm from "../sections/ReservationForm";
import { Box } from "@mui/material";
import GreekSallad from "../../assets/greek-sallad.png";

const ReservationPage = () => {
  return (
    <div>
      <Box sx={{ height: "40vh" }}>
        <img
          src={GreekSallad}
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
      <ReservationForm />
    </div>
  );
};

export default ReservationPage;
