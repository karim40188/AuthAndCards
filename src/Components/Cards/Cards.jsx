import { Box, Container, Grid, Typography } from "@mui/material";
import car1 from "../../assets/cars/car1.jpg";
import car2 from "../../assets/cars/car2.jpg";
import car3 from "../../assets/cars/car3.jpg";
import car4 from "../../assets/cars/car4.jpg";
import car5 from "../../assets/cars/car5.jpg";
import car6 from "../../assets/cars/car6.jpg";
import car7 from "../../assets/cars/car7.jpg";
import car8 from "../../assets/cars/car8.jpg";
import { useState } from "react";

function Cards() {
  let [activeCard, setActiveCard] = useState("");
  let [cards] = useState([
    { img: car1, title: "car" },
    { img: car2, title: "car" },
    { img: car3, title: "car" },
    { img: car4, title: "car" },
    { img: car5, title: "car" },
    { img: car6, title: "car" },
    { img: car7, title: "car" },
    { img: car8, title: "car" },
  ]);

  return (
    <Container>
      <Grid
        container
        sx={{
          justifyContent: "center",
          paddingBlock: "10px",
          paddingLeft: "50px",
        }}
      >
        {cards.map((card, index) => {
          return (
            <Grid
              item
              key={index}
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                width: "153px",
                height: "159px",
                textAlign: "center",
                margin: "5px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "3px 6px 5px 5px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
              onClick={(e) => {
                if (activeCard) {
                  activeCard.classList.remove("test1");
                }
                e.currentTarget.classList.add("test1");
                setActiveCard(e.currentTarget);
              }}
            >
              <Box sx={{ width: "150px", height: "120px" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                  }}
                  component="img"
                  src={card.img}
                ></Box>
              </Box>

              <Typography
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                }}
                variant="body1"
              >
                {card.title}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Cards;
