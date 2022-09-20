import { Chip } from "@mui/material";
import React from "react";

export default function Tags(props) {
  return <Chip label={props.label} color={props.primary} {...props} />;
}
