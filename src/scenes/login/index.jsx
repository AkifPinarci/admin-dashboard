import React from "react";
import Login from "./Login";
import { Outlet } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ForgetPassword from "./ForgetPassword";
import img from "../../assets/bg.webp";
import logo from "../../assets/logo.png";
const LoginPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const currentUser = false;
  const forgotPassword = false;
  const myStyle = {
    backgroundImage: `url(${img})`,
    height: "100vh",
    backgroundRepeat: "repeat",
  };
  return (
    <Box display="flex" flexDirection="row">
      <Box
        flex={1}
        sx={myStyle}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <img style={{ minHeight: "10%", maxHeight: "20%" }} src={logo}></img>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginBottom="60%"
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              margin: "10px 20px",
            }}
          >
            Admin Dashboard Application
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flex={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        rowGap="10px"
      >
        <Outlet sx={{ height: "100vh" }} />
      </Box>
    </Box>
  );
};

export default LoginPage;
