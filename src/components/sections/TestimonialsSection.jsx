import React from "react";
import {
  Container,
  Avatar,
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Avatar5 from "../../assets/avatar5.png";
import Avatar6 from "../../assets/avatar6.png";
import Avatar7 from "../../assets/avatar7.png";
import Avatar8 from "../../assets/avatar8.png";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: "hsl(160, 13%, 80%)",
  backgroundColor: "hsl(160, 13%, 45%)",
  fontStyle: "italic",
  minHeight: "165px",
  lineHeight: "60px",
  borderRadius: "0px",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    minHeight: "80px",
  },
}));

const TestimonialsSection = () => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1300px", py: 8 }}>
      <Grid container spacing={1} sx={{ mb: 8 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Box
              sx={{
                display: "flex",
                mb: 2,
                position: "relative",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="avatar"
                src={Avatar5}
                sx={{
                  display: "inline-block",
                  position: "absolute",
                  left: "0px",
                }}
              ></Avatar>
              <FormatQuoteIcon color="primary.main" sx={{ fontSize: "40px" }} />
            </Box>
            <Typography sx={{ fontSize: "14px" }}>
              This cozy restaurant has left the best impressions! Hospitable
              hosts, delicious dishes, beautiful presentation, wide wine list
              and wonderful dessert.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Box
              sx={{
                display: "flex",
                mb: 2,
                position: "relative",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="avatar"
                src={Avatar6}
                sx={{
                  display: "inline-block",
                  position: "absolute",
                  left: "0px",
                }}
              ></Avatar>
              <FormatQuoteIcon color="primary.main" sx={{ fontSize: "40px" }} />
            </Box>
            <Typography sx={{ fontSize: "14px" }}>
              The ambiance is very welcoming and charming. Amazing wines, food
              and service. Staff are extremely knowledgeable and make great
              recommendations.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Box
              sx={{
                display: "flex",
                mb: 2,
                position: "relative",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="avatar"
                src={Avatar7}
                sx={{
                  display: "inline-block",
                  position: "absolute",
                  left: "0px",
                }}
              ></Avatar>
              <FormatQuoteIcon color="primary.main" sx={{ fontSize: "40px" }} />
            </Box>
            <Typography sx={{ fontSize: "14px" }}>
              I have to say, I enjoyed every single bite of the meal in Little
              Lemon. I had a 3 course meal, with a couple of beers. Considering
              the quality, the price is reasonable.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Box
              sx={{
                display: "flex",
                mb: 2,
                position: "relative",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="avatar"
                src={Avatar8}
                sx={{
                  display: "inline-block",
                  position: "absolute",
                  left: "0px",
                }}
              ></Avatar>
              <FormatQuoteIcon color="primary.main" sx={{ fontSize: "40px" }} />
            </Box>
            <Typography sx={{ fontSize: "14px" }}>
              Excellent food. Menu is extensive and seasonal to a particularly
              high standard. Definitely fine dining.
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
};

export default TestimonialsSection;
