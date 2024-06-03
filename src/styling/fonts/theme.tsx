import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Comfortaa, sans-serif",
    caption: {
      fontFamily: "Comfortaa, sans-serif",
      fontWeight: "bold",
      fontSize: 18,
    },
    h1: {
      fontFamily: "Comfortaa, sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Comfortaa, sans-serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Comfortaa, sans-serif",
      fontWeight: 400,
      fontSize: 18,
    },
  },
});

export default theme;
