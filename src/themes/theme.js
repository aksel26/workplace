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
      // "Do Hyeon",
      "Noto Sans KR",
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
  //  palette: {
  //   primary: {
  //     main: "#00ff00"
  //   }
  // }
});
