import React from "react";

export default function FormGroupLabel(props) {
  return (
    <FormGroup>
      <FormControlLabel
        control={props.control}
        disabled={props.disabled}
        label={props.label}
      />
    </FormGroup>
  );
}
