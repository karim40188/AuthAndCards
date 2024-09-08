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
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
              width: "100%",
              height: "60px",
            },
          },
        },
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    localStorage.setItem("user", email);
    navigate("/showcards");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ padding: "15px" }}>
            <Typography
              sx={{ fontSize: { xs: "30px", sm: "40px", md: "50px" }, fontWeight: "700", color: "#0F1F32" }}
            >
              Logo
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "30px", sm: "40px", md: "50px" },
                  fontWeight: "400",
                  color: '#D76320',
                }}
              >
                Hello,
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "40px", sm: "50px", md: "60px" },
                  fontWeight: "700",
                  color: '#D76320',
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
                  label="Email"
                  placeholder="E-Mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  sx={{ marginBottom: "15px" }}
                />
                <TextField
                  id="password"
                  label="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ marginBottom: "15px" }}
                />
                <FormControlLabel
                  control={<Checkbox sx={{ color: "#B5B5B5" }} />}
                  label="Remember me"
                  sx={{ color: "#B5B5B5" }}
                />
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "10px" }}>
                  <Button
                    sx={{
                      width: "100%",
                      maxWidth: "175px",
                      height: "51px",
                      borderRadius: "10px",
                      backgroundColor: '#D76320',
                      color: '#fff',
                      textTransform: "capitalize",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      maxWidth: "175px",
                      height: "51px",
                      borderRadius: "10px",
                      color: '#D76320',
                      textTransform: "capitalize",
                      fontSize: "16px",
                      fontWeight: "700",
                      border: "1px solid #D76320",
                    }}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{ width: "100%", height: "auto" }}
              component="img"
              src={loginImg}
              alt="Login Illustration"
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
