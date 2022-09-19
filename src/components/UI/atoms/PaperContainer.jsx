import React from "react";
import Paper from "@mui/material/Paper";

export default function PaperContainer(props) {
  console.log("props: ", props);
  return (
    <>
      <Paper
        elevation={props.elevation}
        variant={props.variant}
        square={props.square}
      >
        {props.content}
      </Paper>
    </>
  );
}
