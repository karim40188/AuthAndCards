import { Box, Grid2, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { SideBarToggleContext } from "../Context/SideBarToggleContext";
import brick from "../../assets/cards_images/brick.png";
import bullhorn from "../../assets/cards_images/bullhorn.png";
import car from "../../assets/cards_images/car.png";
import construction from "../../assets/cards_images/construction.png";
import cpu from "../../assets/cards_images/cpu.png";
import distribution from "../../assets/cards_images/distribution.png";
import hazardousMaterial from "../../assets/cards_images/hazardous-material.png";
import insurance from "../../assets/cards_images/insurance.png";
import pickaxe from "../../assets/cards_images/pickaxe.png";
import reusableBottle from "../../assets/cards_images/reusable-bottle.png";
import solvent from "../../assets/cards_images/solvent.png";
import stationery from "../../assets/cards_images/stationery.png";
import waterBottle from "../../assets/cards_images/water-bottle.png";
import wifi from "../../assets/cards_images/wifi.png";
import worker from "../../assets/cards_images/worker.png";
import workspace from "../../assets/cards_images/workspace.png";
import { useTranslation } from "react-i18next";

function Services() {
  let [activeCard, setActiveCard] = useState("");
  const {t}= useTranslation()
  let { isSidebarOpen } = useContext(SideBarToggleContext);

  let [cards] = useState([
    { icon: brick, name: "building-materials" }, // لل brick
    { icon: bullhorn, name: "advertising" }, // لل bullhorn
    { icon: car, name: "cars" }, // لل car
    { icon: construction, name: "construction" }, // لل construction
    { icon: cpu, name: "electronics" }, // لل cpu
    { icon: distribution, name: "logistics" }, // لل distribution
    { icon: hazardousMaterial, name: "safety" }, // لل hazardous-material
    { icon: insurance, name: "insurance" }, // لل insurance
    { icon: pickaxe, name: "tools" }, // لل pickaxe
    { icon: reusableBottle, name: "bottled-water" }, // لل reusable-bottle
    { icon: solvent, name: "chemical" }, // لل solvent
    { icon: stationery, name: "stationery" }, // لل stationery
    { icon: waterBottle, name: "bottled-water" }, // لل water-bottle
    { icon: wifi, name: "wifi" }, // لل wifi
    { icon: worker, name: "worker" }, // لل worker
    { icon: workspace, name: "workspace" }, // لل workspace
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

      <Grid2 container sx={{}} spacing={4}>
        {cards?.map((card, index) => {
          return (
            <Grid2
              item
              key={index}
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                width: "153px",
                height: "159px",
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
              <Box
                sx={{
                  width: "92px",
                  height: "89px",
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    borderRadius: "8px 8px 0 0",
                    objectFit: "cover",
                  }}
                  component="img"
                  src={card.icon}
                />
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
                {t(card.name)}
              </Typography>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}

export default Services;
