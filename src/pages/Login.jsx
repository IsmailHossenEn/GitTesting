import React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  return (
    <>
      <Grid container gap={1} alignItems={"center"}>
        <Grid item xs={5}>
          <Stack
            p={3}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Box>
              <img
                src="https://res.cloudinary.com/dn9bladxx/image/upload/v1725170721/Logo_t11fw5.png"
                alt=""
              />
            </Box>

            <Typography variant="h6" color={"white"}>
              CARRIERLOOKUP
            </Typography>
            <Typography variant="caption" color={"white"} mt={-1}>
              Lorem, ipsum dolor.
            </Typography>
            <Box height={"300px"} my={3}>
              <img
                height={"100%"}
                src="https://res.cloudinary.com/dn9bladxx/image/upload/v1725170639/samples/landscapes/architecture-signs.jpg"
                alt=""
              />
            </Box>
            <Button variant="contained">Sign In</Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={2} sx={{ bgcolor: "#fff", py: "20px", px: "40px" }}>
            <Stack gap={3}>
              <Stack textAlign={"center"}>
                <Typography variant="h6">Sign Up to Carrier Lookup</Typography>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Typography>
              </Stack>
              <Stack width={"60%"} mx={"auto"}>
                <Typography variant="subtitle1">Your Email</Typography>
                <TextField
                  type="email"
                  id="fullWidth"
                  placeholder="Write Something here"
                />
              </Stack>
              <Stack width={"60%"} mx={"auto"}>
                <Typography variant="subtitle1">Enter Password</Typography>
                <TextField type="password" id="fullWidth" placeholder="" />
              </Stack>
              <Stack width={"60%"} mx={"auto"}>
                <Typography variant="subtitle1">Confirm Password</Typography>
                <TextField type="password" id="fullWidth" />
              </Stack>
              <Stack
                width={"60%"}
                mx={"auto"}
                direction={"row"}
                alignItems={"center"}
              >
                <Box>
                  <Checkbox {...label} />
                </Box>
                <Typography variant="subtitle2">
                  I agree with <span>terms and conditions</span>
                </Typography>
              </Stack>
              <Stack
                width={"60%"}
                mx={"auto"}
                direction={"row"}
                alignItems={"center"}
              >
                <Button
                  fullWidth={true}
                  sx={{
                    bgcolor: "orange",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#ff7901",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
