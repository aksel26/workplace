import React from "react";
import TextField from "@mui/material/TextField";
import { width } from "@mui/system";

export default function TextInput(props) {
  console.log("props: ", props);
  return (
    <TextField
      variant={props.variant}
      color={props.color}
      value={props.content}
      label={props.label}
      endAdornment={props.endAdornment}
      size={props.size}
      fullWidth
      // sx={{ width: props.width }}
    />
  );
}
