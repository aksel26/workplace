import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import PaperContainer from "../atoms/PaperContainer";
import Tags from "../atoms/Tags";
import Typo from "../atoms/Typo";
import TestInfoCompanyName from "../molcules/TestInfoCompanyName";
import TestInfoContent from "../molcules/TestInfoStatus";

export default function TestInfoBox() {
  return (
    <>
      <PaperContainer
        elevation={2}
        sx={{
          minWidth: "18rem",
          maxWidth: "18rem",
          padding: "0 1rem",
        }}
        children={
          <>
            <Box sx={{ width: "auto" }}>
              <Grid container rowSpacing={1} p={1}>
                <Grid item xs={12}>
                  <TestInfoContent />
                </Grid>
                <Grid item xs={12}>
                  <TestInfoCompanyName />
                </Grid>

                <Grid item xs={12}>
                  <Typo
                    text="석유화학사업본부 생산기술/품질/환경안전 엔지니어 경력사원 모집(여수)"
                    variant={"caption"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Typo
                        text="전체 12:00"
                        variant={"caption"}
                        sx={{ fontSize: ".4rem" }}
                      />
                    </Grid>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ margin: "0 .3rem" }}
                    />
                    <Grid item>
                      <Typo
                        text="사전점검완료 10:00"
                        variant={"caption"}
                        sx={{ fontSize: ".4rem" }}
                      />
                    </Grid>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ margin: "0 .3rem" }}
                    />
                    <Grid item>
                      <Typo
                        text="검사완료 18:00"
                        variant={"caption"}
                        sx={{ fontSize: ".4rem" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typo
                    align="center"
                    sx={{ fontSize: ".7rem" }}
                    variant={"caption"}
                    text={"본검사 시작 2021-10-19 09:00"}
                  />
                </Grid>
              </Grid>
            </Box>
          </>
        }
      ></PaperContainer>
    </>
  );
}
