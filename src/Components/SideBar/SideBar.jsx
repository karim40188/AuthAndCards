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
import { StatusContext } from "../Context/StatusContext";
import { useNavigate } from "react-router-dom";
function SideBar() {
  let { darkMode } = useContext(DarkModeContext);
  let navigate = useNavigate();
  let { isSidebarOpen } = useContext(SideBarToggleContext);
  let { status } = useContext(StatusContext);
  let [activeLink, setActiveLink] = useState("");
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
        width: { md: isSidebarOpen ? "20%" : "0", zIndex: "1200" },
        transition: "700ms width ease",
        top: "0",
        left: "0",
        bottom: "0",
        overflow: "hidden",
        color: "#124989",
        // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        paddingBlock: "20px",
        backgroundColor: darkMode ? "rgb(24, 24, 24)" : "#fff",
        // transition: "width 0.3s",
        display: { xs: isSidebarOpen ? "block" : "none", md: "block" },
        zIndex: 1200,
        // height: "100vh",
        borderRight: "1px solid #e0e0e0",
        // width: "100%",
        overflowY: "auto",
      }}
    >
      <Box sx={{}}>
        {isSidebarOpen ? (
          <>
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
                  // backgroundColor:'red'
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
            <Box
              sx={{
                gap: "12px",
                marginBottom: { xs: "15px", sm: "0px" },
                width: "180px",
                height: "181px",
                margin: "auto",
                display: {
                  xs: isSidebarOpen ? "flex" : "",
                  md: "none",
                },
                flexWrap: { xs: "wrap" },
              }}
            >
              {status.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    backgroundColor: item.color,
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "76px",
                    height: "77px",
                    borderRadius: "5px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition:
                      "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      backgroundColor: item.hoverColor,
                      transform: "scale(1.05)",
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" },
                    }}
                  >
                    {item.count}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "10px", sm: "12px" } }}
                  >
                    {item.title}
                  </Typography>
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
                      cursor: "pointer",
                      borderRadius: "5px",
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "",
                        "& .link-text": {
                          color: "#000000",
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
                      onClick={(e) => {
                        console.log("hello");

                        if (activeLink) {
                          activeLink.classList.remove("active-link");
                        }

                        e.currentTarget.classList.add("active-link");
                        setActiveLink(e.currentTarget);
                        navigate(`/${e.currentTarget.innerText}`);
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
                        variant="body1"
                        sx={{
                          color:
                            link.name == "Languages" ||
                            link.name == "Help" ||
                            link.name == "Country" ||
                            link.name == "Settings"
                              ? "#D76320"
                              : darkMode
                              ? "#FFFFFF"
                              : "#124989",

                          transition: "color 0.3s",
                        }}
                      >
                        {link.name}
                      </Typography>
                    </Box>
                    {link.name == "Ads" ? <Divider sx={{ my: "12px" }} /> : ""}
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default SideBar;
