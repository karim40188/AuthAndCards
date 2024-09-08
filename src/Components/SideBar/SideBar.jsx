import { useState } from "react";
import { Box, Stack, Typography, IconButton, Divider, Switch } from "@mui/material";
import PropTypes from "prop-types";
import userImg from "../../assets/user.png";
import flag from "../../assets/flag.png";
import homeIcon from "../../assets/vectors/home.png";
import companyIcon from "../../assets/vectors/company.png";
import clientsIcon from "../../assets/vectors/clients.png";
import supplierIcon from "../../assets/vectors/suppliers.png";
import purchasesIcon from "../../assets/vectors/purchases.png";
import salesIcon from "../../assets/vectors/sales.png";
import reportsIcon from "../../assets/vectors/reports.png";
import settingIcon from "../../assets/vectors/settings.png";
import countryIcon from "../../assets/vectors/country.png";
import laguageIcon from "../../assets/vectors/langauges.png";
import helpIcon from "../../assets/vectors/help.png";
import adsIcon from "../../assets/vectors/ads.png";
import menuIcon from "../../assets/vectors/menu.png";


function SideBar({ toggleDarkMode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // حالة لتبديل الوضع المظلم

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
    toggleDarkMode(); // استدعاء دالة الوضع المظلم المرسلة كخاصية
  };

  const [status] = useState([
    { count: "20", title: "Chats", color: "#ff5722" },
    { count: "20", title: "Requests", color: "#4caf50" },
    { count: "20", title: "Offer Price", color: "#2196f3" },
    { count: "0", title: "Bills", color: "#f44336" },
  ]);

  const [links] = useState([
    { icon: homeIcon, name: "Services" },
    { icon: companyIcon, name: "Company" },
    { icon: clientsIcon, name: "Clients" },
    { icon: supplierIcon, name: "Suppliers" },
    { icon: purchasesIcon, name: "Purchases" },
    { icon: salesIcon, name: "Sales" },
    { icon: reportsIcon, name: "Reports" },
    { icon: adsIcon, name: "Ads" },
    { icon: laguageIcon, name: "Languages" },
    { icon: helpIcon, name: "Help" },
    { icon: countryIcon, name: "Country" },
    { icon: settingIcon, name: "Settings" },
  ]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={toggleSidebar}
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: "20px",
          left: "10px",
          zIndex: 1200,
        }}
      >
        <Box
          component="img"
          src={menuIcon}
          alt="Menu Icon"
          sx={{ width: "30px" }}
        />
      </IconButton>

      <Box
        sx={{
          color: "#124989",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          paddingBlock: "20px",
          backgroundColor: (theme) => theme.palette.background.paper,
          position: { xs: "fixed", md: "static" },
          width: { xs: isSidebarOpen ? "250px" : "0", md: "250px" },
          transition: "width 0.3s",
          display: { xs: isSidebarOpen ? "block" : "none", md: "block" },
          zIndex: 1100,
          height: "100vh",
          overflowY: "auto",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Stack direction="row" sx={{ gap: "10px", alignItems: "center", padding: "0 20px" }}>
          <Box
            sx={{
              width: "70px",
              height: "70px",
              border: "3px solid #124989",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={userImg}
              sx={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#124989",
              }}
            >
              Ahmed Ibrahim Ali
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Box
                sx={{ width: "20px", height: "20px" }}
                component="img"
                src={flag}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                Jordan
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ my: "20px" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "0 20px",
          }}
        >
          {status.map((item) => (
            <Box
              key={item.title}
              sx={{
                backgroundColor: item.color,
                width: "100%",
                height: "70px",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">{item.count}</Typography>
              <Typography variant="body2">{item.title}</Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: "20px" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "0 20px",
          }}
        >
          {links.map((link) => (
            <Box
              key={link.name}
              sx={{
                backgroundColor:
                  link.name === "Services" ? "#D76320" : "transparent",
                cursor: "pointer",
                borderRadius: "5px",
                transition: "background-color 0.3s",
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "50px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <Box
                  component="img"
                  src={link.icon}
                  sx={{ width: "20px", height: "20px" }}
                />
                <Typography
                  sx={{
                    color: link.name === "Services" ? "#FFFFFF" : "#124989",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {link.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", padding: "20px" }}>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            Dark Mode
          </Typography>
          <Switch
            checked={darkMode}
            onChange={handleDarkModeChange}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#D76320',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#D76320',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

// تعريف PropTypes لمكون SideBar
SideBar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default SideBar;

