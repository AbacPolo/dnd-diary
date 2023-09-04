import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFF7E1',
      dark: '#FFE6A0',
      contrastText: '#929292',
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
    fontFamily: '"Nunito Sans", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: "4rem", //40px
      fontWeight: 500, //Semi-bold
      letterSpacing: "10px",
      color: "#fff",
      marginLeft: "10px",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "4rem", //40px
      fontWeight: 500, //Semi-bold
      letterSpacing: "10px",
      color: "#fff",
      marginLeft: "10px",
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "2rem", //24px
      fontWeight: 500, //Semi-bold
      letterSpacing: "6px",
      color: "#F5AC10",
      marginLeft: "6px",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "1.5rem", //20px
      fontWeight: 400, //Regular
      letterSpacing: "6px",
      color: "#F5AC10",
      marginLeft: "6px",
    },
    h5: {
      fontSize: "1rem", //16px
      fontWeight: 300, //Light
      letterSpacing: "4px",
      color: "#fff",
      marginLeft: "4px",
    },
    h6: {
      fontSize: "1rem", //16px
      fontWeight: 200, //Extra-Light
      color: "#fff",
    },
    body1: {
      fontSize: "1rem", //16px
      fontWeight: 300, //Light
    },
    caption: {
      fontSize: "1rem", //16px
      fontWeight: 200, //Extra-Light
      color: "#fff",
    },
  },
});

export default responsiveFontSizes(theme);
