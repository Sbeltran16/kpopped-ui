import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
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
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h3" align="center">
          <span style={{ color: "#99668F" }}>K</span>popped
          <span style={{ color: "#669970" }}>!</span>
        </Typography>
      </Grid>

      {/* Right side */}
      <ButtonsGridContainer item>
        <Grid item>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <StyledLandingButton
              variant="contained"
              sx={{ backgroundColor: "#99668F" }}
            >
              Sign Up
            </StyledLandingButton>
          </Link>
        </Grid>
        <span style={{ display: "flex", justifyContent: "center" }}>or</span>
        <Grid item>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <StyledLandingButton
              variant="outlined"
              sx={{ borderColor: "#669970", color: "#000000" }}
            >
              Sign In
            </StyledLandingButton>
          </Link>
        </Grid>
      </ButtonsGridContainer>
    </MainGridContainer>
  );
}
