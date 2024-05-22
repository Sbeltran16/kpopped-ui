import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import {
  ButtonsGridContainer,
  MainGridContainer,
  StyledLandingButton,
} from "./index.css";

export default function LandingNav() {
  return (
    <MainGridContainer>
      {/* Left side */}
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h2" align="center">
          Kpopped!
        </Typography>
      </Grid>

      {/* Right side */}
      <ButtonsGridContainer item>
        <Grid item>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <StyledLandingButton variant="contained">
              Sign Up
            </StyledLandingButton>
          </Link>
        </Grid>
        <span> _____or_____ </span>
        <Grid item>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <StyledLandingButton variant="outlined">
              Sign In
            </StyledLandingButton>
          </Link>
        </Grid>
      </ButtonsGridContainer>
    </MainGridContainer>
  );
}
