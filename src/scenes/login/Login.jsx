import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
  Divider,
  IconButton,
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
  const navigate = useNavigate();
  const HandleForgetPassword = () => {
    navigate("/login/forget-password");
  };
  const HandleRequestAccess = () => {
    navigate("/login/sign-up");
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
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
              <IconButton
                className="icon-button-no-hover"
                onClick={HandleForgetPassword}
              >
                <Typography sx={{ color: colors.blueAccent[400] }}>
                  Forgot password?
                </Typography>
              </IconButton>
            </Box>
            <Box display="flex" justifyContent="center" mt="20px" width="100%">
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
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Not a user?
              </Typography>
              <IconButton
                className="icon-button-no-hover"
                onClick={HandleRequestAccess}
              >
                <Typography
                  sx={{ margin: "0 20px", color: colors.blueAccent[400] }}
                  onClick={() => {
                    console.log("Not a user");
                  }}
                >
                  Request access
                </Typography>
              </IconButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
