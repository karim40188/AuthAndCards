import { useContext, useState } from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import userImg from "../../assets/user.png";
import flag from "../../assets/flag.png";
import {
  MdBuild,
  MdBusiness,
  MdPeople,
  MdShoppingCart,
  MdAttachMoney,
  MdAssessment,
  MdHelpOutline,
  MdSettings,
} from "react-icons/md";
import { FaTruck, FaBullhorn, FaLanguage, FaGlobe } from "react-icons/fa";

import { DarkModeContext } from "../Context/DarkModeContext";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";
function SideBar() {
  let { darkMode } = useContext(DarkModeContext);
  let { isSidebarOpen } = useContext(SideBarToggleContext);
  const [links] = useState([
    { icon: <MdBuild />, name: "Services" },
    { icon: <MdBusiness />, name: "Company" },
    { icon: <MdPeople />, name: "Clients" },
    { icon: <FaTruck />, name: "Suppliers" },
    { icon: <MdShoppingCart />, name: "Purchases" },
    { icon: <MdAttachMoney />, name: "Sales" },
    { icon: <MdAssessment />, name: "Reports" },
    { icon: <FaBullhorn />, name: "Ads" },
    { icon: <FaLanguage />, name: "Languages" },
    { icon: <MdHelpOutline />, name: "Help" },
    { icon: <FaGlobe />, name: "Country" },
    { icon: <MdSettings />, name: "Settings" },
  ]);

  return (
    <Box
      sx={{
        position: "fixed",
        width: { xs: isSidebarOpen ? "20%" : "0", zIndex: "1200" },
      }}
    >
      <Box
        sx={{
          color: "#124989",
          // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          paddingBlock: "20px",
          backgroundColor: darkMode ? "rgb(24, 24, 24)" : "#fff",

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
                color: darkMode ? "#fff" : "#124989",
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
                  color: darkMode ? "#fff" : "#333",
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
                    sx={{
                      width: "20px",
                      height: "20px",
                      color: darkMode ? "#fff" : "#124989",
                    }}
                  >
                    {link.icon}
                  </Box>
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
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
