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
        <Typography variant="h1" align="center">
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
        <span style={{ display: "flex", justifyContent: "center" }}>or</span>
        <Grid item>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <StyledLandingButton className="comfortaa-bold" variant="outlined">
              Sign In
            </StyledLandingButton>
          </Link>
        </Grid>
      </ButtonsGridContainer>
    </MainGridContainer>
  );
}
