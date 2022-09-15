import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import Header from "./components/Header";
import Header from "./components/Header";
import Content from "./components/Content";
import { theme } from "./themes/theme";
import { atom } from "recoil";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Content />
      </ThemeProvider>
    </>
  );
}
export const isNavOpen = atom({
  key: "navOpen",
  default: {
    isOpen: true,
  },
});

export default App;
