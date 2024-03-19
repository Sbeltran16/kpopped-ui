import React from "react";
import { Link, Button, Box, Grid, Typography } from "@mui/material";
import TextInput from "../../inputs/text-input";
import { StyledFormBox } from "../signup/index.css";

export default function LoginForm() {
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
            Log In
          </Typography>
          <Box component="form" noValidate>
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
              Log In
            </Button>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Link href="/signup" variant="body2">
                  <Typography>Need to Sign Up?</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </StyledFormBox>
      </Grid>
    </Grid>
  );
}
