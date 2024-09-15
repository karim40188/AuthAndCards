import { Box, Typography } from "@mui/material";
import test from "../../assets/cards_images/Desktop_Devices.jpg";
import { useState } from "react";

function Cv() {
  let [files] = useState([
    { img: test, title: "Lorem ipsum dolor sit amet." },
    { img: test, title: "Lorem ipsum dolor sit amet." },
    { img: test, title: "Lorem ipsum dolor sit amet." },
  ]);
  return (
    <Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {files.map((file, index) => {
          return (
            <Box key={index} sx={{cursor:'pointer'}}>
              <Box sx={{ width: "200px" }}>
                <Box sx={{ width: "100%" }} component="img" src={file.img} />
              </Box>
              <Typography sx={{ mt: "5px" }}>{file.title}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Cv;
