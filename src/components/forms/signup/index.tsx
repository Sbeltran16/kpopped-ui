import React from "react";
import { Link, Button, Box, Grid, Typography } from "@mui/material";
import TextInput from "../../inputs/text-input";
import { MainSignupGridContainer, StyledFormBox } from "./index.css";
import { Controller, useForm } from "react-hook-form";
import useSignUp from "../../../api/signup/hooks/use-signup";

export interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
}

export default function SignupForm() {
  const { control, handleSubmit } = useForm<SignUpFormValues>();

  const onSubmit = (data: SignUpFormValues) => signup(data);
  const { signup } = useSignUp();
  return (
    <MainSignupGridContainer>
      {/* Left side */}
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h1" align="center">
          <span style={{ color: "#99668F" }}>K</span>popped
          <span style={{ color: "#669970" }}>!</span>
        </Typography>
      </Grid>

      {/* Right side */}
      <Grid item xs={12} sm={8} md={5}>
        <StyledFormBox>
          <Typography variant="h2">
            <span style={{ color: "#99668F" }}>S</span>ign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, ref } }) => (
                <TextInput
                  required
                  label="Username"
                  placeholder="kpopFan1234"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, ref } }) => (
                <TextInput
                  required
                  label="Email Address"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, ref } }) => (
                <TextInput
                  required
                  label="Password"
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                alignSelf: "center ",
                margin: "0.5rem 0rem",
                textTransform: "none",
              }}
              type="submit"
              value="Submit"
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
    </MainSignupGridContainer>
  );
}
