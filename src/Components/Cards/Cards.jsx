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
          paddingLeft:'50px',
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
                textAlign:'center',
                margin:'5px'

               
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
