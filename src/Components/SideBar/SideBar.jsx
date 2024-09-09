import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
 
} from "@mui/material";
import PropTypes from "prop-types";
import { MdDarkMode, MdLightMode } from "react-icons/md"; // إضافة الأيقونات
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

function SideBar({ toggleDarkMode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
    toggleDarkMode();
  };

  const [status] = useState([
    { count: "20", title: "Chats", color: "#124989" },
    { count: "20", title: "Requests", color: "#D76320" },
    { count: "20", title: "Offer Price", color: "#238912" },
    { count: "0", title: "Bills", color: "#FF0000" },
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
          top: "15px",
          left: "15px",
          zIndex: 1200,
        }}
      >
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 50 50"
          sx={{ fill: "#124989" }}
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </Box>
      </IconButton>

      <Box
        sx={{
          color: "#124989",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          paddingBlock: "20px",
          backgroundColor: darkMode ? "rgb(24, 24, 24)" : "#fff", // الخلفية بناءً على الـ mode
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
        <Stack
          direction="row"
          sx={{ gap: "10px", alignItems: "center", padding: "0 20px" }}
        >
          <Box
            sx={{
              width: "60px",
              height: "60px",
              border: "2px solid #124989",
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
              sx={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: darkMode ? "#fff" : "#124989", // لون النص بناءً على الـ mode
              }}
            >
              Ahmed Ibrahim Ali
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Box
                sx={{ width: "16px", height: "16px" }}
                component="img"
                src={flag}
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                Jordan
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ my: "15px" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "0 20px",
          }}
        >
          {status.map((item) => (
            <Box
              key={item.title}
              sx={{
                backgroundColor: item.color,
                width: "100%",
                height: "60px",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                padding: "8px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">{item.count}</Typography>
              <Typography variant="body2">{item.title}</Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: "15px" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
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
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  "& .link-text": {
                    color: darkMode ? "#000000" : "#000000",
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "40px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                <Box
                  component="img"
                  src={link.icon}
                  sx={{ width: "20px", height: "20px" }}
                />
                <Typography
                  className="link-text"
                  sx={{
                    color: darkMode ? "#FFFFFF" : "#124989",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "color 0.3s",
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
          <IconButton
            onClick={handleDarkModeChange}
            sx={{
              fontSize: "30px",
              color: darkMode ? "#FFDF00" : "#4B4B4B",
              transition: "color 0.3s",
            }}
          >
            {darkMode ? <MdDarkMode /> : <MdLightMode />} {/* التبديل بين الأيقونتين */}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default SideBar;
