import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import React from "react";
import { useState } from "react";
import InputComponent from "../atoms/InputComponent";
import PasswordVisibleIcon from "../atoms/PasswordVisibleIcon";
import TextInput from "../atoms/TextInput";

export default function PasswordInput(props) {
  console.log("props21: ", props);

  const [values, setSetValues] = useState({
    showPassword: true,
  });
  return (
    <>
      <InputComponent
        {...props}
        values={values}
        endAdornment={
          <PasswordVisibleIcon values={values} setSetValues={setSetValues} />
        }
      ></InputComponent>
    </>
  );
}
