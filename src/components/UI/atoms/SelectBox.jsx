import React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem, Select } from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
export default function SelectBox({ variant, ...props }) {
  console.log("props: ", props);
  return (
    <>
      <Select label={props.label} select color={props.color} variant={variant}>
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
