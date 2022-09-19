import { Container } from "@mui/material";
import React from "react";

export default function ContainerComponent(props) {
  return <Container maxWidth={props.maxWidth} sx={props.sx} />;
}
