import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
// import Header from "./components/Header";
import Header from "./components/Header";
import Content from "./components/Content";
import { theme } from "./themes/theme";
import { useState } from "react";
import { atom, useRecoilState } from "recoil";

function App() {
  const [state, setState] = useState({
    left: false,
  });

  // const [value, setValue] = useRecoilState(textState);
  // console.log("value: ", value);
  const toggleDrawer = (anchor, open) => (event) => {
    console.log("anchor, open: ", anchor, open);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open === true ? false : true });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header state={state} toggleDrawer={toggleDrawer} />
        <Content state={state} toggleDrawer={toggleDrawer} />
      </ThemeProvider>
    </>
  );
}
export const isNavOpen = atom({
  key: "navOpen",
  default: false,
});

export default App;
