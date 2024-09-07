import { Box, Grid } from "@mui/material";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

function Home() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
        <Navbar />
          <Cards />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
