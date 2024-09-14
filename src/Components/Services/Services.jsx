import { Box, Grid2, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";
import cardImg from "../../assets/vectors/card.png";

function Services() {
  let [activeCard, setActiveCard] = useState("");
  let { isSidebarOpen } = useContext(SideBarToggleContext);

  let [cards] = useState([
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
    {img:cardImg, title:'Electronics'},
  ]);
  return (
    <Box>
      {isSidebarOpen ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: { xs: "block", sm: "block", md: "none" },
          }}
        ></Box>
      ) : null}

      <Grid2 container sx={{}} spacing={2}>
        {cards?.map((card, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                width: "153px",
                height: "auto",
                textAlign: "center",

                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "3px 6px 5px 5px rgba(0,0,0,0.1)",
                cursor: "pointer",
                "&:hover": {
                  scale: "1.2",
                },
              }}
              onClick={(e) => {
                if (activeCard) {
                  activeCard.classList.remove("test1");
                }
                e.currentTarget.classList.add("test1");
                setActiveCard(e.currentTarget);
              }}
            >
              <Box sx={{ width: "153px", height: "120px" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    borderRadius: "8px 8px 0 0",
                    objectFit: "cover",
                  }}
                  component="img"
                  src={card.img}
                ></Box>
              </Box>

              <Typography
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  paddingInline: "10px",
                  paddingBlock: "30px",
                  // height: "40px",
                }}
                variant="body1"
              >
                {card.title}
              </Typography>
            </Box>
          );
        })}
      </Grid2>
    </Box>
  );
}

export default Services;
