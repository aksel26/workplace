import { createTheme } from "@mui/material";

export const theme = createTheme({
  shape: {
    borderRadius: 7,
  },
  typography: {
    h5: {
      fontWeight: 700,
    },
    fontFamily: [
      // "Montserrat",
      "Do Hyeon",
      // "Noto Sans KR",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      light: "#E3F2FD",
      main: "#2196F3",
      dark: "#1E88E5",
    },
    secondary: {
      light: "#EDE7F6",
      main: "#673AB7",
      dark: "#5E35B1",
    },
  },
});
