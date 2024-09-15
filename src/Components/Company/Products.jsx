import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import test from "../../assets/cards_images/Desktop_Devices.jpg";
import { useState } from "react";
function Products() {
  let path = useParams();
  let [files] = useState([
    { img: test, title: "Lorem ipsum dolor sit amet.", bgColor: "#AB9780" },
    { img: test, title: "Lorem ipsum dolor sit amet.", bgColor: "#79A1A8" },
    { img: test, title: "Lorem ipsum dolor sit amet.", bgColor: "#ADDBB6" },
    { img: test, title: "Lorem ipsum dolor sit amet.", bgColor: "#F8EFBD" },
    { img: test, title: "Lorem ipsum dolor sit amet.", bgColor: "#A9BBE0" },
    { img: test, title: "Lorem ipsum dolor sit amet.", bgColor: "#C0AAD0" },
    { img: test, title: "Lorem ipsum dolor sit amet.", bgColor: "#6193C9" },
  ]);
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ textTransform: "capitalize", my: "10px",fontSize:'30px' }}
      >{`${path.company} Company`}</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {files.map((product, index) => {
          return (
            <Box key={index} sx={{ cursor: "pointer" , border:'1px solid #000'}}>
              <Box sx={{ width: "200px" }}>
                <Box sx={{ width: "100%" }} component="img" src={product.img} />
              </Box>
              <Typography
                sx={{ backgroundColor: product.bgColor, padding: "10px" }}
              >
                {product.title}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Products;
