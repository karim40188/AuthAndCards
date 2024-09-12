import { Box, IconButton, Typography } from "@mui/material";
import searchIcon from "../../assets/vectors/searchIcon.svg";
import { useContext, useState } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { SideBarToggleContext } from "../Context/SideBarToggleContext";
import { StatusContext } from "../Context/StatusContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  let { isSidebarOpen, setSidebarOpen } = useContext(SideBarToggleContext);
  let { status } = useContext(StatusContext);
  let [inputFull, setInputFull] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSearchIcon = () => {
    setInputFull(!inputFull);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#1F1F1F" : "#124989",
        position: "fixed",
        left: "0",
        right: "0",
        top: 0,
        zIndex: "1100",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box
        sx={{
          height: "auto",
          display: "flex",
          width: "auto",
          // flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          // alignItems: "center",
          padding: { xs: "10px", sm: "20px 30px" },

          zIndex: 1000,
          marginLeft: isSidebarOpen ? "310px" : "0",
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          sx={{
            display: 'block',
            zIndex: 1200,
            marginTop: "10px",
            
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
            sx={{ fill: "#fff" }}
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </Box>
        </IconButton>
        {/* Status Section */}
        <Box
          sx={{
            flexWrap: { xs: "wrap", sm: "nowrap" }, 
            justifyContent: { xs: "center", sm: "flex-start" }, 
            alignItems: "center",
            gap: "10px",
            marginBottom: { xs: "15px", sm: "0px" }, 
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
        >
          {status.map((item) => (
            <Box
              key={item.title}
              sx={{
                // backgroundColor: item.color,
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // padding:'8px',
                borderRadius: "8px",
                width: "76px",
                height: "auto",
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
              <IconButton sx={{ fontSize: "30px", color: "#fff" }}>
                <item.Icon />
              </IconButton>

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

        {/* Search and Dark Mode Toggle */}
        <Box
          component="form"
          sx={{
            width: { xs: "100%", sm: "auto" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              width: { xs: inputFull ? "350px" : "45px", lg: "350px" }, 
              textAlign: "center",
              // paddingBottom:'10px'
              transition: "1s all",
            }}
            onClick={toggleSearchIcon}
          >
            <input
              type="search"
              placeholder="Search..."
              style={{
                width: "100%",
                height: "50px",
                border: "none",
                outline: "none",
                borderRadius: "8px",
                paddingInline: "15px",
                backgroundColor: darkMode ? "#333" : "#F0F0F0",
                color: darkMode ? "#FFF" : "#333",
                fontSize: "16px",
                boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2)`,
              }}
            />
            <Box
              sx={{
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "50%",
                right: { xs: "5px", md: "10px" },
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              component="img"
              src={searchIcon}
            />
          </Box>

          <IconButton
            onClick={toggleDarkMode}
            sx={{
              color: darkMode ? "#FFDF00" : "#FFF",
              transition: "color 0.3s",
              fontSize: "30px",
            }}
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
