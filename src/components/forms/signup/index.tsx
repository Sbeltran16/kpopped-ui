import React from "react";
import {
  Link,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import TextInput from "../../inputs/text-input";
import { StyledFormBox } from "./index.css";

export default function SignupForm() {
  return (
    <Grid container component="main">
      {/* Left side */}
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography component="h2" variant="h4" align="center">
          Kpopped!
        </Typography>
      </Grid>

      {/* Right side */}
      <Grid item xs={12} sm={8} md={5}>
        <StyledFormBox>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate>
            <TextInput
              required
              label="username"
              placeholder="kpopFan1234"
              fullWidth
              id="username"
              name="username"
            />
            <TextInput
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextInput
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Link href="/login" variant="body2">
                  <Typography>Already Have An Account?</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </StyledFormBox>
      </Grid>
    </Grid>
  );
}
