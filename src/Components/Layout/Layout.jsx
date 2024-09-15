import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useTheme } from "@emotion/react";
import Navbar from "../Navbar/Navbar";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";
import { useContext } from "react";
import { useTranslation } from 'react-i18next'; 

function Layout() {
  let { isSidebarOpen } = useContext(SideBarToggleContext);
  let theme = useTheme();
  const { i18n } = useTranslation(); 


  const isRtl = i18n.language === 'ar'; 

  return (
    <Box sx={{ display: "flex", direction: isRtl ? 'rtl' : 'ltr' }}>
      {/* SideBar */}
      <SideBar />

      {/* Main Content */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          width: '100%',
          minHeight: '100vh',
        }}
      >
        {/* Navbar */}
        <Navbar />
        <Box
          sx={{
            marginTop: { xs: "210px", md: "230px" },
            marginRight: isRtl ? (isSidebarOpen ? { xs: "300px", md: "400px" } : "70px") : undefined,
            marginLeft: !isRtl ? (isSidebarOpen ? { xs: "350px", md: "400px" } : {xs:'70px',md:'100px'}) : undefined,
            transition: "all 0.3s ease",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
