import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffffff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  typography: {
    // fontFamily: 'Times, Times New Roman, serif',
    fontSize: "20px",
  },
});

export const whiteColor = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});