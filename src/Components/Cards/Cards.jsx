import { Box, Container, Grid, Typography } from "@mui/material";
import cardImg from "../../assets/vectors/card.png";
import { useState } from "react";

function Cards() {
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
  ]);
  return (
    <Container>
      <Grid
        container
        sx={{
          justifyContent: "center",
          margin: "0 auto",
          paddingBlock: "10px",
          paddingLeft:'50px',
          backgroundColor: "f7f7f7",
        }}
      >
        {cards.map((card, index) => {
          return (
            <Grid
              item
              xs={2}
              key={index}
              sx={{
                backgroundColor: "#FFFFFF",
                width: "153px",
                height: "159px",

               
              }}
            >
              <Box component="img" src={card.img}></Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#D76320",
                  fontFamily: "Amiko",
                }}
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
