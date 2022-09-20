import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import PaperComponent from "./PaperComponent";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TestInfoBox from "./UI/organism/TestInfoBox";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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
              <Carousel
                navButtonsAlwaysVisible
                NextIcon={<NavigateNextIcon />}
                PrevIcon={<NavigateBeforeIcon />}
                swipe={false}
                index={0}
                animation="slide"
              >
                <Grid
                  container
                  columnSpacing={2}
                  justifyContent="flex-start"
                  sx={{ padding: "30px 60px" }}
                >
                  <Grid item>
                    <TestInfoBox />
                  </Grid>
                  <Grid item>
                    <TestInfoBox />
                  </Grid>
                  <Grid item>
                    <TestInfoBox />
                  </Grid>
                  <Grid item>
                    <TestInfoBox />
                  </Grid>
                  <Grid item>
                    <TestInfoBox />
                  </Grid>
                  {/* <Grid item>
                    <TestInfoBox />
                  </Grid> */}
                </Grid>
                <Grid
                  container
                  columnSpacing={2}
                  justifyContent="flex-start"
                  sx={{ padding: "30px 60px" }}
                >
                  <Grid item>
                    <TestInfoBox />
                  </Grid>
                  <Grid item>
                    <TestInfoBox />
                  </Grid>
                </Grid>
              </Carousel>
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
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
