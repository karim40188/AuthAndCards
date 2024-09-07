import {  Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

function Layout() {
  return (
    <Grid container>
      <Grid item xs={3}>
      <SideBar />

      </Grid>
      <Grid item xs={9}>
      <Outlet />

      </Grid>

    </Grid>
  );
}

export default Layout;
