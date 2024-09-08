import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#124989" : "#124989",
      },
      background: {
        default: isDarkMode ? "#333" : "#f7f7f7",
        paper: isDarkMode ? "#444" : "#fff",
      },
      text: {
        primary: isDarkMode ? "#fff" : "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={3} md={2.2}>
            <SideBar toggleDarkMode={toggleDarkMode} />
          </Grid>
          <Grid item xs={12} sm={9} md={9.8} sx={{ backgroundColor: theme.palette.background.default }}>
            <Navbar />
            <Cards />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
