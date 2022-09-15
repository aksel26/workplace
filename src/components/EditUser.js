import {
  Box,
  Button,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Input,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function EditUser() {
  return (
    <>
      <Container maxWidth={false} sx={{ padding: "2rem", maxWidth: "100%" }}>
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
                개인정보 수정
              </Typography>
              <Grid
                container
                sx={{
                  border: "1px solid black",
                  borderRadius: "7px",
                  padding: "3rem",
                  justifyContent: "center",
                }}
              >
                <FormGroup
                  sx={{
                    width: "100%",
                  }}
                >
                  <FormControl required margin={"normal"} variant={"filled"}>
                    <FormLabel>이메일</FormLabel>
                    <Input id="email" />
                  </FormControl>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <FormControl
                        required
                        margin={"normal"}
                        sx={{ width: "90%" }}
                      >
                        <FormLabel>비밀번호</FormLabel>
                        <Input id="pw" type="password" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl
                        sx={{ width: "90%" }}
                        required
                        margin={"normal"}
                      >
                        <FormLabel>비밀번호 확인</FormLabel>
                        <Input id="pw-confirm" type="password" />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <FormControl required margin={"normal"}>
                    <FormLabel>권한</FormLabel>
                    <Input disabled />
                  </FormControl>
                  <FormControl required margin={"normal"}>
                    <FormLabel>이름</FormLabel>
                    <Input id="userName" />
                  </FormControl>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <FormControl
                        sx={{ width: "90%" }}
                        required
                        margin={"normal"}
                      >
                        <FormLabel>H.P</FormLabel>
                        <Input id="mobile" />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl
                        sx={{ width: "90%" }}
                        required
                        margin={"normal"}
                      >
                        <FormLabel>내선전화</FormLabel>
                        <Input id="phoneNumber" />
                      </FormControl>
                    </Grid>
                  </Grid>
                </FormGroup>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained">수정</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">취소</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
