import "@mui/material";
import loginImg from "../../assets/login.png";

import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  ThemeProvider,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    localStorage.setItem('user',email)
  }
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ padding: "15px" }}>
            <Typography
              sx={{ fontSize: "50px", fontWeight: "700", color: "#0F1F32" }}
            >
              Logo
            </Typography>

            <Box sx={{}}>
              <Typography
                sx={{ fontSize: "50px", fontWeight: "400", color: "#D76320" }}
              >
                Hello,
              </Typography>
              <Typography
                sx={{
                  fontSize: "60px",
                  fontWieght: "700",
                  color: "#D76320",
                  height: "80px",
                }}
              >
                Welcome Back
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <TextField
                  id="email"
                  label="email"
                  placeholder="E-Mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  sx={{ marginBlock: "10px" }}
                ></TextField>
                <TextField
                  id="password"
                  label="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></TextField>
                <FormControlLabel
                  control={<Checkbox sx={{ color: "#B5B5B5" }} />}
                  label="Remember me"
                  sx={{ color: "#B5B5B5" }}
                />
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      width: "175px",
                      height: "51px",
                      borderRadius: "10px",
                      backgroundColor: "#D76320",
                      color: "#fff",
                      textTransform: "capitalize",
                      fonSize: "20px",
                      fontWeight: "700",
                    }}
                    type="submit"
                    onClick={() => {
                       navigate('/showcards')
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    sx={{
                      width: "175px",
                      height: "51px",
                      borderRadius: "10px",
                      color: "#D76320",
                      textTransform: "capitalize",
                      fonSize: "20px",
                      fontWeight: "700",
                      border: "1px solid #D76320",
                      marginLeft: "10px",
                    }}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{ width: "100%", height: "auto" }}
              component="img"
              src={loginImg}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
