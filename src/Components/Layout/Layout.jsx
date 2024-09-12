import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useTheme } from "@emotion/react";
import Navbar from "../Navbar/Navbar";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";
import { useContext } from "react";
function Layout() {
  let { isSidebarOpen } = useContext(SideBarToggleContext);
  let theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <SideBar />
      </Box>
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Navbar />
        <Box
          sx={{
            marginTop: { xs: "15%", md: "10%" },
            paddingLeft: isSidebarOpen ? "15px" : "60px",
            marginLeft: {
              xs: isSidebarOpen ? "67%" : "0",
              sm: isSidebarOpen ? "45%" : "0",
              md: isSidebarOpen ? "25%" : "0",
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
