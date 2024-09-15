import { useContext, useState } from "react";
import shadadyLogo from "../assets/cards_images/shadady.jpg";
import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { DarkModeContext } from "./Context/DarkModeContext";
function Category() {
  let { darkMode } = useContext(DarkModeContext);
  let [companiesLogo] = useState([
    { img: shadadyLogo, name: "shadady" },
    { img: shadadyLogo, name: "shadady" },
    { img: shadadyLogo, name: "shadady" },
    { img: shadadyLogo, name: "shadady" },
  ]);
  let path = useParams();

  console.log(path);
  return (
    <Box>
      <Typography
        component="h3"
        sx={{
          mb: "10px",
          fontSize: "32px",
          fontWeight: "600",
          color: darkMode ? "#fff" : "#000",
          textTransform: "capitalize",
          letterSpacing: "4px",
        }}
      >
        {path.specialcategory}
      </Typography>
      <Box sx={{ display: "flex", gap: "10px" }}>
        {companiesLogo.map((company, index) => {
          return (
            <Link key={index} to={company.name}>
              <Box
                sx={{
                  width: "200px",
                  cursor: "pointer",
                  borderRadius: "12px",
                  overflow: "hidden",
                  "&:hover": {
                    scale: "1.07",
                  },
                }}
              >
                <Box
                  sx={{ width: "100%", borderRadius: "12px" }}
                  component="img"
                  src={company.img}
                />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default Category;
