import { Box, Grid2, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";
import { StatusContext } from "../Context/StatusContext";

function Company() {
  let [activeCard, setActiveCard] = useState("");
  let { isSidebarOpen } = useContext(SideBarToggleContext);
  let [cars, setCars] = useState([]);
  let { fetchCarImages } = useContext(StatusContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getCars() {
    let res = await fetchCarImages();
    setCars(res.data.photos);
    return res;
  }

  useEffect(() => {
    getCars();
  }, [getCars]);
  return (
    <Box
     
    >
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

      <Grid2 container spacing={2}>
        {cars?.map((card, index) => {
          return (
            <Grid2
              item
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
                  src={card.src.medium}
                ></Box>
              </Box>

              <Typography
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  paddingInline: "10px",
                  paddingBlock: "30px",
                  height: "40px",
                }}
                variant="body1"
              >
                {card.alt.split(" ").splice(0, 7).join(" ")}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}

export default Company;
