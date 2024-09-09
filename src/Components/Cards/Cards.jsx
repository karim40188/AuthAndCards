import { Box, Container, Grid, Typography } from "@mui/material";
import cardImg from "../../assets/vectors/card.png";
import { useState } from "react";

function Cards() {
  let [activeCard, setActiveCard] = useState("");
  let [cards] = useState([
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
    { img: cardImg, title: "Electronics" },
  ]);

  return (
    <Container>
      <Grid
        container
        sx={{
          justifyContent: "center",
          paddingBlock: "10px",
          paddingLeft: "50px",
          backgroundColor: (theme) => theme.palette.background.default,
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
              <Box component="img" src={card.img}></Box>
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
