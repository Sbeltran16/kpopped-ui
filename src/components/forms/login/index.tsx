import React from "react";
import { Link, Button, Box, Grid, Typography } from "@mui/material";
import TextInput from "../../inputs/text-input";
import { StyledFormBox } from "../signup/index.css";
import { Controller, useForm } from "react-hook-form";
import useLogin from "../../../api/login/hooks/use-login";
import { MainLoginGridContainer } from "./index.css";

export interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { control, handleSubmit } = useForm<LoginFormValues>();
  const { login } = useLogin();

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  return (
    <MainLoginGridContainer>
      {/* Left side */}
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" align="center">
          <span style={{ color: "#99668F" }}>K</span>popped
          <span style={{ color: "#669970" }}>!</span>
        </Typography>
      </Grid>

      {/* Right side */}
      <Grid item xs={12} sm={8} md={5}>
        <StyledFormBox>
          <div style={{ marginBottom: "1.4rem" }}>
            <Typography variant="h4">
              <span style={{ color: "#669970" }}>L</span>
              og In
            </Typography>
          </div>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, ref } }) => (
                <TextInput
                  required
                  label="Email Address"
                  placeholder="example@gmail.com"
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
                  placeholder="********"
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "none" }}
            >
              Log In
            </Button>
            <Grid
              container
              sx={{
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Grid item>
                <Link href="/signup" variant="body2">
                  <Typography>Need to Sign Up?</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </StyledFormBox>
      </Grid>
    </MainLoginGridContainer>
  );
}
