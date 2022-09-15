import { Container, Box } from "@mui/material";
import React, { useState } from "react";
import EditUser from "./EditUser";
import Main from "./Main";
import Nav from "./Nav";

export default function Content({ state, toggleDrawer }) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#eeeeee",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Nav state={state} toggleDrawer={toggleDrawer} />
        <Main state={state} />
        {/* <EditUser /> */}
      </Box>
    </>
  );
}
