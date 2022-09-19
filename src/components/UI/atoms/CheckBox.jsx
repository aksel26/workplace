import { Checkbox } from "@mui/material";
import React from "react";

export default function CheckBox(props) {
  console.log("props: ", props);
  return (
    <>
      <Checkbox label={props.label} size={props.size} checked={props.checked} />
    </>
  );
}
