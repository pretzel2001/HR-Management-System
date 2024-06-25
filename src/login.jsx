import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../pictures/login.jpg";
import img2 from "../pictures/berger-logo.png";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = () => {
    // validation, API call, etc
    // If login is successful, navigate to the Dashboard
    navigate("/dashboard");
  };

  return (
    <Stack direction={"row"} bgcolor={"white"} height={"100vh"}>
      {/* Side Image */}
      <Stack sx={{ display: { xs: 'none', sm: 'block' }, width: '60%', height: '100%' }}>
        <img src={img1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
      </Stack>

      {/* Form Section */}
      <Stack
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          width: { xs: "100%", sm: "40%" }, // 40% width on small screens, full width on extra small
          padding: '50px',
          boxSizing: "border-box", // Ensure padding is included in width calculation
          height: '100%', // Height of the form section is 100% of viewport height
        }}
      >
        {/* Logo */}
        <img src={img2} alt="" style={{ width: '30%', marginBottom: '20px' }} />

        {/* Form Container */}
        <Stack
          spacing={2}
          alignItems={"center"}
          sx={{
            width: '100%', // Full width for the form container
            textAlign: 'center', // Center align content inside the form container
            maxWidth: '350px', // Limit maximum width for larger screens
            height: 'auto'
          }}
        >
          {/* Welcome Back Text */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: '500', fontStyle: 'bold' }}>
            Welcome Back!
          </Typography>
          {/* Login Prompt */}
          <Typography variant="body1" gutterBottom color={'gray'}>
            Please login to your account
          </Typography>

          {/* Username TextField */}
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth // Take full width of the container
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#6B6B6B !important",
                  borderRadius: "6px !important",
                },
                "&:hover fieldset": {
                  borderColor: "#6B6B6B !important",
                  borderRadius: "6px !important",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6B6B6B !important",
                  borderRadius: "6px !important",
                },
              },
            }}
          />

          {/* Password TextField */}
          <TextField
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth // Take full width of the container
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#6B6B6B !important",
                  borderRadius: "6px !important",
                },
                "&:hover fieldset": {
                  borderColor: "#6B6B6B !important",
                  borderRadius: "6px !important",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6B6B6B !important",
                  borderRadius: "6px !important",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Remember Me Checkbox and Forgot Password Link */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent="space-between"
            sx={{ width: '100%', marginTop: '10px' }}
          >
            {/* Remember Me Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  defaultCheckedOff
                  sx={{
                    color: "#003049",
                    "&.Mui-checked": {
                      color: "#003049",
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ fontSize: { xs: '11px', sm: '14px' } }}>
                  Remember Me
                </Typography>
              }
            />

            {/* Forgot Password Link */}
            <Link to="/forgot-password" style={{ textDecoration: "none" }}>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: '11px', sm: '14px' }, color: "black" }}
              >
                Forgot Password?
              </Typography>
            </Link>
          </Stack>

          {/* Login Button */}
          <Button
            variant="contained"
            disableElevation
            disableRipple
            sx={{
              width: "100%", // Full width button
              backgroundColor: "#003049",
              borderRadius: "6px",
              "&:hover": {
                backgroundColor: "#003049",
                borderRadius: "6px",
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>

        {/* Footer */}
        <footer style={{ marginTop: 'auto', textAlign: 'center', width: '100%' }}>© Berger Paints Limited, 2024 | All Rights Reserved</footer>
      </Stack>
    </Stack>
  );
};

export default Login;