import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { BsTwitch } from "react-icons/bs";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const initialValues = {
  email: "",
  password: "",
};

const userSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});
const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box display="flex" flexDirection="row">
      <Box bgcolor={colors.primary[400]} flex={1}>
        Streamer Pro Admin Dashboard Application
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
        <Box borderStyle="3 solid red" padding="5px" width="50%">
          <Header
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            title="Login"
            subtitle="Your Social Campaigns"
          ></Header>
          <Box display="flex" justifyContent="space-between">
            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary[100],
                border: "1px solid",
                borderColor: colors.primary[100],
                width: "45%",
              }}
            >
              <FcGoogle />
              <Typography sx={{ marginLeft: "10px", textTransform: "none" }}>
                Sign in with Google
              </Typography>
            </Button>
            <Button
              sx={{
                color: colors.primary[100],
                border: "1px solid",
                borderColor: colors.primary[100],
                width: "45%",
              }}
            >
              <BsTwitch />
              <Typography sx={{ marginLeft: "10px", textTransform: "none" }}>
                Sign in with Twitch
              </Typography>
            </Button>
          </Box>
          <Divider sx={{ margin: "10px 0" }}>
            <Typography>Or with E-mail</Typography>
          </Divider>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box>
                  <Typography sx={{ width: "100%" }}>E-mail</Typography>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                  <Typography sx={{ width: "100%" }}>Password</Typography>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                </Box>
                <Box display="flex" justifyContent="right">
                  <Typography sx={{ color: colors.blueAccent[400] }}>
                    Forgot password?
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  mt="20px"
                  width="100%"
                >
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    Continue
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" p="10px">
                  <Typography>Not a user?</Typography>
                  <Typography
                    sx={{ margin: "0 20px", color: colors.blueAccent[400] }}
                  >
                    Request access
                  </Typography>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
