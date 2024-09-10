import { Box, IconButton, Typography } from "@mui/material";
import searchIcon from "../../assets/vectors/search.png";
import { useContext, useState } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {
  AiOutlineMessage,
  AiOutlineFileSearch,
  AiOutlineDollarCircle,
  AiOutlineFileDone,
} from "react-icons/ai";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [status] = useState([
    {
      count: "20",
      title: "Chats",
      color: "#00796B",
      hoverColor: "#004D40",
      Icon: AiOutlineMessage,
    },
    {
      count: "20",
      title: "Requests",
      color: "#F57F17",
      hoverColor: "#C6A700",
      Icon: AiOutlineFileSearch,
    },
    {
      count: "20",
      title: "Offer Price",
      color: "#2E7D32",
      hoverColor: "#1B5E20",
      Icon: AiOutlineDollarCircle,
    },
    {
      count: "0",
      title: "Bills",
      color: "#D32F2F",
      hoverColor: "#B71C1C",
      Icon: AiOutlineFileDone,
    },
  ]);
  let { isSidebarOpen, setSidebarOpen } = useContext(SideBarToggleContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen)
  };

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#1F1F1F" : "#124989",
        height: "auto",
        display: "flex",
      
        flexDirection: { xs: "column", sm: "row" }, // عمودي للشاشات الصغيرة وأفقي للشاشات الأكبر
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "10px", sm: "20px 30px" },
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <IconButton
          onClick={toggleSidebar}
          sx={{
            display: { xs: "block", md: "block" },
            zIndex: 1200,
            marginTop:'10px'
          
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
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" }, // التفاف في الشاشات الصغيرة
          justifyContent: { xs: "center", sm: "flex-start" }, // توسيط في الشاشات الصغيرة
          gap: "25px",
          marginBottom: { xs: "15px", sm: "0px" }, // مسافة تحتية في الشاشات الصغيرة
        }}
      >
        {status.map((item) => (
          <Box
            key={item.title}
            sx={{
              // width: "40px", // أصغر في الشاشات الصغيرة
              // height: "40px",
              // backgroundColor: item.color,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // borderRadius: "50%",
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "12px",
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
            width: { xs: "100%", md: "450px", sm: "250px" }, // عرض كامل في الشاشات الصغيرة
          }}
        >
          <input
            type="search"
            placeholder="Search..."
            style={{
              width: "100%",
              height: "50px",
              border: "none",
              outline: "none",
              borderRadius: "25px",
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
              right: "10px",
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
  );
}

export default Navbar;
