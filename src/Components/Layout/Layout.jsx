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
      {/* SideBar */}
      <SideBar />

      {/* Main Content */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          width:'100%',
          minHeight:'100vh'
        }}
      >
        {/* Navbar */}
        <Navbar />
        <Box
          sx={{
            marginTop: { xs: "15%", md: "14%" },
            marginLeft: isSidebarOpen ? { xs: "300px", md: "400px" } : "70px",
          }}
        >
          <Outlet
            sx={{
              transition: "all 0.3s ease",
              paddingInline: "30px",

              // paddingLeft: isSidebarOpen ? "15px" : "60px",
              // width: isSidebarOpen ? "80%" : "0%",
              // marginLeft: isSidebarOpen ? { xs: "130px", md: "420px" } : "40px", // قيم marginLeft بناءً على حالة الـ SideBar
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
