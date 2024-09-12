import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useTheme } from "@emotion/react";
import Navbar from "../Navbar/Navbar";

function Layout() {
  let theme = useTheme();
  return (
    <Box sx={{display:'flex'}}>
      <Box >
        <SideBar />
      </Box>
      <Box
       
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Navbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
