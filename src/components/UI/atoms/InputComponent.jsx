import { FormControl, Input, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

export default function InputComponent({ values, ...props }) {
  console.log("props: ", props);
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel htmlFor="outlined-adornment-password">
        {props.label}
      </InputLabel>
      <OutlinedInput
        type={values.showPassword ? "text" : "password"}
        value={props.content}
        endAdornment={props.endAdornment}
        label={props.label}
      />
    </FormControl>
  );
}
