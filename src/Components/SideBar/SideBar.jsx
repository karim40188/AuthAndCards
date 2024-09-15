import { useContext, useEffect, useRef, useState } from "react";
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
import { IoStar } from "react-icons/io5";
import { DarkModeContext } from "../Context/DarkModeContext";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";
import { StatusContext } from "../Context/StatusContext";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.jpg";
import { useTranslation } from "react-i18next"; 
import LanguageSwitcher from "../LanguageSwitcher";
function SideBar() {
  let sidebarRef = useRef(null);
  let { darkMode } = useContext(DarkModeContext);
  let navigate = useNavigate();
  let { isSidebarOpen, setSidebarOpen } = useContext(SideBarToggleContext);
  let { status } = useContext(StatusContext);
  let [activeLink, setActiveLink] = useState("");
  const { t } = useTranslation();

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks([
      { icon: <MdBuild />, name: t("Services"), path: "/services" },
      { icon: <MdBusiness />, name: t("company"), path: "/company" },
      { icon: <MdPeople />, name: t("clients"), path: "/clients" },
      { icon: <FaTruck />, name: t("suppliers"), path: "/suppliers" },
      { icon: <MdShoppingCart />, name: t("purchases"), path: "/purchases" },
      { icon: <MdAttachMoney />, name: t("sales"), path: "/sales" },
      { icon: <MdAssessment />, name: t("reports"), path: "/reports" },
      { icon: <FaBullhorn />, name: t("ads"), path: "/ads" },
      { icon: <FaLanguage />, name: t("languages"), path: "/languages" },
      { icon: <MdHelpOutline />, name: t("help"), path: "/help" },
      { icon: <FaGlobe />, name: t("country"), path: "/country" },
      { icon: <MdSettings />, name: t("settings"), path: "/settings" },
    ]);
    const handleClickOutSide = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    // document.addEventListener("mousedown", handleClickOutSide);
    // return () => {
    //   document.removeEventListener("mousedown", handleClickOutSide);
    const mediaQuery = window.matchMedia('(max-width: 768px)'); 

    const handleResize = () => {
      if (mediaQuery.matches) {
        document.addEventListener('mousedown', handleClickOutSide);
      } else {
        document.removeEventListener('mousedown', handleClickOutSide);
      }
    };
    handleResize(); 

    window.addEventListener('resize', handleResize); 
  }, [t, setSidebarOpen]);
  return (
    <Box
      sx={{
        position: "fixed",
        width: { md: isSidebarOpen ? "20%" : "0" },
         zIndex: "1200",
        transition: "700ms width ease",
        top: "0",
        bottom: "0",
        overflow: "hidden",
        color: "#124989",
        paddingBlock: "20px",
        backgroundColor: darkMode ? "rgb(24, 24, 24)" : "#fff",
        display: { xs: isSidebarOpen ? "block" : "none", md: "block" },
        height: "auto",
        borderRight: "1px solid #e0e0e0",
        overflowY: "auto",
      }}
      ref={sidebarRef}
    
    >
      <Box>
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
                  {t("welcome")}
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
                    {t("jordan")}
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
                mx: "auto",
                mt: "30px",

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
                        if (activeLink) {
                          activeLink.classList.remove("active-link");
                        }

                        e.currentTarget.classList.add("active-link");
                        setActiveLink(e.currentTarget);
                        navigate(link.path);
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
                        className="link-text"
                        sx={{
                          color:
                            link.name === t("languages") ||
                            link.name === t("help") ||
                            link.name === t("country") ||
                            link.name === t("settings")
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
                    {link.name === t("ads") ? (
                      <Divider sx={{ my: "12px" }} />
                    ) : (
                      ""
                    )}
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  border: "1px solid #D76320",
                  textAlign: "center",
                  width: "130px",
                  height: "130px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  margin: "auto",
                }}
              >
                <Box
                  component="img"
                  src={logoImg}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "primary.main",
                width: "100%",
                height: "90px",
                position: "relative",
                marginTop: "13px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#124989",
                  padding: "15px",
                  position: "absolute",
                  top: "5px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    justifyContent: "space-around",
                    fontSize: "22px",
                  }}
                >
                  <IoStar color="#f7b030" />
                  <IoStar color="#f7b030" />
                  <IoStar color="#f7b030" />
                  <IoStar color="#f7b030" />
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          ""
        )}
      </Box>
      <LanguageSwitcher />
    </Box>
  );
}

export default SideBar;
