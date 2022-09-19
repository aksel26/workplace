import { Box, Container, Grid, Paper, Stack } from "@mui/material";

import React from "react";
import TextInput from "../UI/atoms/TextInput";
import PasswordInput from "../UI/molcules/PasswordInput";
import SwitchWithLabel from "../UI/molcules/SwitchWithLabel";
import Buttons from "../UI/atoms/Buttons";
import PaperContainer from "../UI/atoms/PaperContainer";
import { theme } from "../../themes/theme";
import Typo from "../UI/atoms/Typo";

export default function LoginTemplate(props) {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center ",
        background: "#E3F2FD",
      }}
    >
      <Box
        sx={{
          width: "30%",
          background: "white",
          height: "80%",
          borderRadius: "7px",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          outlineStyle: "solid",
          outlineColor: theme.palette.primary.dark,
          outlineWidth: ".5px",
        }}
      >
        <Grid sx={{ width: "80%", height: "auto" }} container rowSpacing={4}>
          <Grid item xs={12}>
            <Typo variant="h3" text="ACG" />
          </Grid>
          <Grid item xs={12}>
            <TextInput label={"ID"} />
          </Grid>
          <Grid item xs={12}>
            <PasswordInput label={"PW"} />
          </Grid>
          <Grid item xs={12}>
            비밀번호변경
            <SwitchWithLabel label={"보안로그인"} />
          </Grid>
          {/* <Grid item xs={3}>
            <Buttons text={"계정생성"} primary variant={"contained"} />
          </Grid> */}
          <Grid item xs={12}>
            <Buttons
              fullWidth
              text={" 인증하기"}
              primary
              variant={"contained"}
            />
          </Grid>
        </Grid>
      </Box>
      {/* </PaperContainer> */}
    </Container>
  );
}
