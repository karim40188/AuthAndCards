import { Box, Checkbox, FormControlLabel, TextField, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImg from "../../assets/login.png";

function Login() {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password, rememberMe });
    localStorage.setItem("user", email);
    navigate("/home");
  }

  return (
    <Box
      sx={{
     
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            marginTop:'40px',
            paddingLeft:'60px',
            gap:'10px'
            ,
            
      
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "50px" },
              fontWeight: "700",
              color: "text.primary",
            }}
          >
            Logo
          </Typography>

          <Box>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "50px" },
                fontWeight: "400",
                color: "primary.main",
              }}
            >
              Hello,
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "40px", md: "60px" },
                fontWeight: "700",
                color: "primary.main",
                height: "80px",
              }}
            >
              Welcome Back
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <TextField
                id="email"
                label="Email"
                placeholder="E-Mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                sx={{
                  marginBlock: "10px",
                  width: { xs: "90%", sm: "80%", md: "415px" },
                }}
              />
              <TextField
                id="password"
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  marginBlock: "10px",
                  width: { xs: "90%", sm: "80%", md: "415px" },
                }}
              />
              <FormControlLabel
                control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(prev => !prev)} sx={{ color: "#B5B5B5" }} />}
                label="Remember me"
                sx={{ color: "text.secondary", marginTop: "10px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "10px",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  sx={{
                    width: { xs: "100%", sm: "175px" },
                    height: "51px",
                    borderRadius: "10px",
                    backgroundColor: "#D76320",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <Button
                  sx={{
                    width: { xs: "100%", sm: "175px" },
                    height: "51px",
                    borderRadius: "10px",
                    color: "#D76320",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    fontWeight: "700",
                    border: "1px solid #D76320",
                    marginLeft: { xs: "0", sm: "10px" },
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
            sx={{
              width: "100%",
              height: "100vh",
              display: { xs: "none", md: "block" },
            }}
            component="img"
            src={loginImg}
            alt="Login Illustration"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
