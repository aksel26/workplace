import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import InputComponent from "../atoms/InputComponent";
import PasswordVisibleIcon from "../atoms/PasswordVisibleIcon";
import Switches from "../atoms/Switches";
import TextInput from "../atoms/TextInput";

export default function SwitchWithLabel(props) {
  return (
    <FormControlLabel
      control={<Switches />}
      label={props.label}
    ></FormControlLabel>
  );
}
