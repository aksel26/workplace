import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

// TODO: Inner Content 컴포넌트 개발

/**
 *
 * @param {Object} children // Content내용
 * @returns {Object}
 */

export default function PaperComponent({ children }) {
  return (
    <>
      <Paper elevation={0}>
        <Typography align="center">{children}</Typography>
      </Paper>
    </>
  );
}
