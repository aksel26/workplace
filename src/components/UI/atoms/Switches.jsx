import { Switch } from "@mui/material";
import React from "react";

export default function Switches(prop) {
  return (
    <>
      <Switch color={prop.color} size={prop.size} checked={prop.checked} />
    </>
  );
}
