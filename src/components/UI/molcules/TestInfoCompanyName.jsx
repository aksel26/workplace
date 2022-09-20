import { styled } from "@mui/material/styles";

import { Box, Chip, Grid } from "@mui/material";
import React from "react";
import Tags from "../atoms/Tags";
import Typo from "../atoms/Typo";

export default function TestInfoCompanyName(props) {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "신입" },
    { key: 1, label: "대졸" },
  ]);
  return (
    <>
      <Grid
        container
        // sx={{
        //   flexWrap: "wrap",
        //   listStyle: "none",
        // }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typo variant={"caption"} text="LG/LG화학" />
        </Grid>
        <Grid item>
          <Grid container columnSpacing={1}>
            {chipData.map((data) => {
              return (
                <Grid item>
                  <Tags
                    label={data.label}
                    //   onDelete={data.label === "React" ? undefined : handleDelete(data)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
