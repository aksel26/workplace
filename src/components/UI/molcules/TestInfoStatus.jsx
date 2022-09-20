import { styled } from "@mui/material/styles";

import { Box, Chip, Grid } from "@mui/material";
import React from "react";
import Tags from "../atoms/Tags";

const ListItem = styled("li")(({ theme }) => ({
  // margin: theme.spacing(0.5),
  // padding: 0,
}));

export default function TestInfoStatus(props) {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "본검사 진행" },
    { key: 1, label: "인적성" },
    { key: 2, label: "화상 ON", primary: "primary" },
  ]);
  return (
    <>
      <Grid
        container
        sx={{
          listStyle: "none",
        }}
        justifyContent="space-between"
      >
        {chipData.map((data) => {
          return (
            <Grid item>
              <ListItem key={data.key}>
                <Tags
                  label={data.label}
                  primary={data.primary}
                  //   onDelete={data.label === "React" ? undefined : handleDelete(data)}
                />
              </ListItem>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
