import { Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import cyperSecurityImg from "../../assets/cards_images/cyper_security.png";
import { useContext, useState } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ServicesCat() {
  let [categories] = useState([
    { img: cyperSecurityImg, title: "Technical Security" },
    { img: cyperSecurityImg, title: " Desktop Devices" },
    { img: cyperSecurityImg, title: "Technical Software" },
    { img: cyperSecurityImg, title: "Smartphones" },
  ]);

  const { t } = useTranslation();
  let { darkMode } = useContext(DarkModeContext);
  return (
    <Box sx={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          width: "600px",
          flexWrap: "wrap",
          margin: "100px",
        }}
      >
        {categories.map((cat) => {
          return (
            <Link to={cat.title.toLowerCase().split(' ').join('')} key={cat.title}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  border: "2px solid gray",
                  width: "250px",
                  padding: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transition: "background-color 0.3s ease",
                  color: darkMode ? "#fff" : "#000",

                  "&:hover": {
                    backgroundColor: "#124989",
                    p: {
                      color: "#fff",
                    },
                  },
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>
                  {t(cat.title)}
                </Typography>
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    backgroundSize: "cover",
                    objectfit: "cover",
                  }}
                  component="img"
                  src={cat.img}
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default ServicesCat;
