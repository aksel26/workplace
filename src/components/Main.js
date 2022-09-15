import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PaperComponent from "./PaperComponent";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function Main() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ padding: "2rem", maxWidth: "100%", height: "100vh" }}
      >
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: "7px",
                width: "100%",
                padding: "30px",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ marginBottom: "1.5rem" }}
              >
                검사/운영
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ border: "1px solid black", borderRadius: "7px" }}
              >
                <Grid item xs={4}>
                  <fieldset className="summaryTitle">
                    <legend>채용그룹 관리</legend>
                    <PaperComponent children={"DataSet"} />
                  </fieldset>
                </Grid>
                <Grid item xs={4}>
                  <fieldset className="summaryTitle">
                    <legend>고객사 관리</legend>
                    <PaperComponent children={"DataSet"} />
                  </fieldset>
                </Grid>
                <Grid item xs={4}>
                  <fieldset className="summaryTitle">
                    <legend>응시자 Q&A</legend>
                    <PaperComponent children={"DataSet"} />
                  </fieldset>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: "7px",
                width: "100%",
                padding: "30px",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ marginBottom: "1.5rem" }}
              >
                연구/개발
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ border: "1px solid black", borderRadius: "7px" }}
              >
                <Grid item xs={12}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ac lacus porta augue ullamcorper dictum vitae ut leo.
                  Cras et eros lacus. Aliquam eu quam consectetur, auctor dui
                  eget, tempus nibh. Integer consequat lacus nec neque varius
                  interdum. Ut dictum malesuada magna et porttitor. Maecenas
                  dignissim aliquet pharetra. Fusce urna nisl, suscipit eu
                  suscipit ac, molestie in libero. Pellentesque consectetur orci
                  a odio iaculis viverra. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut lorem leo, rhoncus et est at,
                  vulputate eleifend mi. Phasellus tincidunt est nulla, vitae
                  placerat diam imperdiet eget.
                  {/* <PaperComponent children={"채용그룹 관리"} /> */}
                </Grid>
                {/* <Grid item xs={4}>
                  <PaperComponent children={"고객사 관리"} />
                </Grid>
                <Grid item xs={4}>
                  <PaperComponent children={"응시자 Q&A"} />
                </Grid> */}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
