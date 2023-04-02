import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/footer-logo.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("a")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "#000",
    },
  }));

  const TypoStyled = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
  }));

  return (
    <Box sx={{ pb: 8 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <img
              src={FooterLogo}
              alt="logo"
              style={{ width: "70px", marginTop: "1rem" }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Navigation
            </Typography>

            <FooterLink href="/menu">Menu</FooterLink>
            <br />
            <FooterLink href="/order">Order</FooterLink>
            <br />
            <FooterLink href="/reservation">Reservation</FooterLink>
            <br />
            <FooterLink href="/about">About</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Contact
            </Typography>

            <TypoStyled>2395 Maldove Way</TypoStyled>
            <br />
            <TypoStyled>Chicage Illinois</TypoStyled>
            <br />
            <TypoStyled>
              {"("}629{")"}-234-6827
            </TypoStyled>
            <br />
            <TypoStyled>info@littlelemon.com</TypoStyled>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Social
            </Typography>

            <TypoStyled>Follow us on social media for more updates!</TypoStyled>

            <IconBox
              sx={{
                mt: 2,
              }}
            >
              <Link href="/menu">
                <FacebookIcon />
              </Link>
              <Link href="/menu">
                <TwitterIcon />
              </Link>
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
