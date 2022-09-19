import { Typography } from "@mui/material";
import React from "react";

export default function Typo(props) {
  console.log("props: ", props);
  return (
    <Typography variant={props.variant} {...props}>
      {props.text}
    </Typography>
  );
}
