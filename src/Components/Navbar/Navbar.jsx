import { Box, IconButton, Stack, Typography } from "@mui/material";
import searchIcon from "../../assets/vectors/searchIcon.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";
import { StatusContext } from "../Context/StatusContext";
import userImg from "../../assets/user.png";
import flag from "../../assets/flag.png";

function Navbar() {
  const searchRef = useRef(null);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { isSidebarOpen, setSidebarOpen } = useContext(SideBarToggleContext);
  const { status } = useContext(StatusContext);
  const [inputFull, setInputFull] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSearchIcon = () => {
    setInputFull(!inputFull);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setInputFull(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        left: "0",
        right: "0",
        top: 0,
        zIndex: "1100",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        backgroundColor: darkMode ? "#1F1F1F" : "#124989",

      
      }}
    >
      <Box sx={{ display: "flex", alignitems: "center" }}>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            width: isSidebarOpen ? "80%" : "100%",
            justifyContent: "space-around",
            padding: { xs: "10px", sm: "20px 30px" },
            zIndex: "1000",
            marginLeft: isSidebarOpen ? "310px" : "0",
          }}
        >
          <IconButton
            onClick={toggleSidebar}
            sx={{
              display: "block",
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

          {/* Search and Dark Mode Toggle */}
          <Box
            component="form"
            sx={{
              // width: { xs: "100%", sm: "auto" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              width: { xs: inputFull ? "350px" : "45px", lg: "600px" },
              textAlign: "center",
              position: "relative",
              transition: "1s all",
            }}
            ref={searchRef}
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
              onClick={toggleSearchIcon} // Corrected to use toggleSearchIcon
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

        <Box
          sx={{
            backgroundColor: "#1E324D",
            color: "#fff",
            width: "320px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          
          }}
        >
          <Typography sx={{fontSize: "22px"}}>
            <Typography component="span" sx={{ color: "#D76320",fontSize: "19px"}}>
              Procurement
            </Typography>{" "}
            Technology
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: darkMode? "#20232A":"#C1C4C7",
          width: "100%",
          height: "100px",
          position: "absolute",
          top: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItem: "center",
            width: "100%",
            marginLeft: isSidebarOpen ? "350px" : "auto",
            transition: "0.3s all ease",
            paddingInline: "30px",
          }}
        >
          <Box
            sx={{
              gap: "12px",
              // marginBottom: { xs: "15px", sm: "0px" },
              display: {xs:"none",md:'flex'},
              alignItems: "center",
              
            
            }}
          >
            {status.map((item) => (
              <Box
                key={item.title}
                sx={{
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
                  position: "relative",
                  backgroundColor: item.color,
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
                <Box
                  sx={{
                    backgroundColor: "red",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "-3px",

                    right: "-3px",
                  }}
                ></Box>
              </Box>
            ))}
          </Box>
          <Stack
            direction="row-reverse"
            sx={{ gap: "20px", alignItems: "center",width:'100%'}}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                border: "2px solid #124989",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                // backgroundColor:'red'
          
              }}
            >
              <Box
                component="img"
                src={userImg}
                sx={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Box
                  sx={{ width: "25px", height: "25px" }}
                  component="img"
                  src={flag}
                />
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "500",
                    color: darkMode ? "#fff" : "#333",
                  }}
                >
                  Jordan
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
