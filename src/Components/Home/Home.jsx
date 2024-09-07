import { Box, Grid } from "@mui/material";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

function Home() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={2.2}>
          <SideBar />
        </Grid>
        <Grid item xs={9.8} sx={{ backgroundColor: "#f7f7f7" }}>
          <Navbar />
          <Cards />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
