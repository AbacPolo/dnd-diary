import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFF7E1",
      dark: "#FFE6A0",
      contrastText: "#929292",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {},
      },
    },
  },
  typography: {
    fontFamily: '"Bree Serif", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: "5rem", //48px
      fontWeight: 400, //Regular
      color: "#fff",
    },
    h2: {
      fontSize: "4rem", //40px
      fontWeight: 400, //Regular
      color: "#fff",
    },
    h3: {
      fontSize: "3rem", //32px
      fontWeight: 400, //Regular
      color: "#fff",
    },
    h4: {
      fontSize: "1.5rem", //20px
      fontWeight: 400, //Regular
      color: "#929292",
    },
    body1: {
      fontSize: "1rem", //16px
      fontWeight: 400, //Regular
      color: "#252525",
    },
    button: {
      fontSize: "2rem", //24px
      fontWeight: 400, //Regular
      color: "#fff",
    },
  },
});

export default responsiveFontSizes(theme);
