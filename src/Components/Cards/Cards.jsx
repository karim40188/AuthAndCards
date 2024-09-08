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
          paddingLeft: "50px",
          backgroundColor: (theme) =>
            theme.palette.background.default,
        }}
      >
        {cards.map((card, index) => {
          return (
            <Grid
              item
              key={index}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.background.paper,
                width: "153px",
                height: "159px",
                textAlign: "center",
                margin: "5px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: (theme) =>
                  `0 4px 8px rgba(0, 0, 0, ${theme.palette.mode === "dark" ? '0.5' : '0.1'})`,
              }}
            >
              <Box component="img" src={card.img}></Box>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.text.primary,
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
