import { Box, Container, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function Cards() {
  let [activeCard, setActiveCard] = useState("");
  let [cars, setCars] = useState([]);
  const fetchCarImages = async () => {
    const API_KEY = "WGAWz3uUlyqsSzFAZkRUk2jD7I1socyDzB410yWSTELky3aq035wiZVx";
    const response = await axios.get("https://api.pexels.com/v1/search", {
      params: {
        query: "cars",
        per_page: 100,
      },
      headers: {
        Authorization: API_KEY,
      },
    });

    console.log(response.data.photos);
    setCars(response.data.photos);
  };

  useEffect(() => {
    fetchCarImages();
  }, []);

  return (
    <Container>
      <Grid2
        container
        sx={{
          paddingBlock: "10px",
          paddingLeft: "50px",
        }}
        spacing={2}
      >
        {cars.map((card, index) => {
          return (
            <Grid2
              item
              key={index}
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                width: "153px",
                height: "auto",
                textAlign: "center",
                margin: "5px",
                borderRadius: "8px",
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
              <Box sx={{ width: "150px", height: "120px" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                  }}
                  component="img"
                  src={card.src.medium}
                ></Box>
              </Box>

              <Typography
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  paddingInline: "10px",
                  paddingBlock:'30px',
                  height:'40px',
                 
                
                }}
                variant="body1"
              >
                {card.alt.split(' ').splice(0,7).join(" ")}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>
    </Container>
  );
}

export default Cards;
