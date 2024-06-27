import React from "react";
import { Link, Button, Box, Grid, Typography } from "@mui/material";
import TextInput from "../../inputs/text-input";
import { StyledFormBox } from "../signup/index.css";
import { Controller, useForm } from "react-hook-form";
import useLogin from "../../../api/login/hooks/use-login";
import { MainLoginGridContainer } from "./index.css";
import ReCAPTCHA from "react-google-recaptcha";

export interface LoginFormValues {
  email: string;
  password: string;
}

const RECAPTCHA_SITE_KEY_PROD =
  process.env.REACT_APP_RECAPTCHA_SITE_KEY_PROD || "";

const RECAPTCHA_SITE_KEY =
  process.env.NODE_ENV === "production" ? RECAPTCHA_SITE_KEY_PROD : undefined;

export default function LoginForm() {
  const { control, handleSubmit } = useForm<LoginFormValues>();
  const { login } = useLogin();
  const [isRecaptchaVerified, setRecaptchaVerified] = React.useState(false);

  const onSubmit = (data: LoginFormValues) => {
    if (isRecaptchaVerified || !RECAPTCHA_SITE_KEY) {
      login(data);
    } else {
      alert("Please complete the reCAPTCHA verification.");
    }
  };

  const handleRecaptchaVerify = (response: string | null) => {
    if (response) {
      setRecaptchaVerified(true);
    }
  };

  return (
    <MainLoginGridContainer>
      {/* Left side */}
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h2" align="center">
          <span style={{ color: "#99668F" }}>K</span>popped
          <span style={{ color: "#669970" }}>!</span>
        </Typography>
      </Grid>

      {/* Right side */}
      <Grid item xs={12} sm={8} md={5}>
        <StyledFormBox>
          <Typography variant="h4">
            <span style={{ color: "#669970" }}>L</span>og In
          </Typography>
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
            {RECAPTCHA_SITE_KEY && (
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaVerify}
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "none" }}
              disabled={!isRecaptchaVerified && !!RECAPTCHA_SITE_KEY}
            >
              Log In
            </Button>
            <Grid
              container
              sx={{ justifyContent: "center", textAlign: "center" }}
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
