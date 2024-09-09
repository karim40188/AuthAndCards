import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import { useContext } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import { DarkModeContext } from "../Context/DarkModeContext";

function Home() {
  let { darkMode } = useContext(DarkModeContext);
 

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#124989",
      },
      background: {
        default: darkMode ? "rgb(24, 24, 24)" : "#f7f7f7",
        paper: darkMode ? "#444" : "#fff",
      },
      text: {
        primary: darkMode ? "#fff" : "#000",
        secondary: "#D76320",
      },
    },
    typography: {
      body1: {
        fontSize: "15px",
        fontWeight: "700",
        fontFamily: "Amiko",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={3} md={2.2}>
            <SideBar sx={{position:'fixed'}}  />
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            md={9.8}
            sx={{ backgroundColor: theme.palette.background.default ,width:'100%'}}
          >
            <Navbar />
            <Cards />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
