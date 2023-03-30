import React from "react";
import { Box, Container, Typography, Paper, Button, Grid } from "@mui/material";

const AboutSection = () => {
  return (
    <Container sx={{ mb: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ color: "primary.main", py: 2 }}
      >
        Little Lemon Chicago
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="p">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            href="/order"
            sx={{
              display: "inline-block",
              px: 5,
              bgcolor: "secondary.main",
              color: "grey.800",
              marginTop: 2,
            }}
          >
            Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
