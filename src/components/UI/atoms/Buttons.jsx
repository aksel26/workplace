import { Button } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function Buttons({ variant, primary, text, ...props }) {
  const mode = primary ? "primary" : "secondary";
  return (
    <Button variant={variant} color={mode} {...props}>
      {text}
    </Button>
  );
}

Buttons.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,

  // bgcolor: PropTypes.string,
  // color: PropTypes.array,
};

Buttons.defaultProps = {
  primary: true,
  onClick: undefined,
};
