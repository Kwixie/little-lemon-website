import { Paper, Typography, Button, Box } from "@mui/material";
import React from "react";

const ConfirmationPopup = ({
  formFields,
  trigger,
  setShowPopup,
  resetFormFields,
}) => {
  const handleClick = () => {
    resetFormFields();
    setShowPopup(false);
  };

  return trigger ? (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ position: "relative", p: 4, textAlign: "center", mx: 2 }}>
        <Typography>
          Thank you for your reservation {formFields.firstName}!
        </Typography>
        <br />
        <Typography>
          You have recieved a confirmation email to {formFields.email}
        </Typography>
        <Button variant="contained" onClick={handleClick} sx={{ mt: 4 }}>
          Close
        </Button>
      </Paper>
    </Box>
  ) : (
    ""
  );
};

export default ConfirmationPopup;
