import { Box, Stack, Typography } from "@mui/material";
import userImg from "../../assets/user.png";
import flag from "../../assets/flag.png";
import { useState } from "react";
import homeIcon from "../../assets/vectors/home.png";
import companyIcon from "../../assets/vectors/company.png";
import clientsIcon from "../../assets/vectors/clients.png";
import supplierIcon from "../../assets/vectors/suppliers.png";
import purchasesIcon from "../../assets/vectors/purchases.png";
import salesIcon from "../../assets/vectors/sales.png";
import reportsIcon from "../../assets/vectors/reports.png";
import settingIcon from "../../assets/vectors/settings.png";
import countryIcon from "../../assets/vectors/country.png";
import laguageIcon from "../../assets/vectors/langauges.png";
import helpIcon from "../../assets/vectors/help.png";
import adsIcon from "../../assets/vectors/ads.png";

function SideBar() {
  let [status, setStatus] = useState([
    { count: "20", title: "Chats", color: "#124989" },
    { count: "20", title: "Requests", color: "#D76320" },
    { count: "20", title: "offer price", color: "#238912" },
    { count: "0", title: "Bills", color: "#FF0000" },
  ]);

  let [links, setLinks] = useState([
    { icon: homeIcon, name: "Services" },
    { icon: companyIcon, name: "Company" },
    { icon: clientsIcon, name: "Clients" },
    { icon: supplierIcon, name: "Suppliers" },
    { icon: purchasesIcon, name: "Purchases" },
    { icon: salesIcon, name: "Sales" },
    { icon: reportsIcon, name: "Reports" },
    { icon: adsIcon, name: "Ads" },
    { icon: laguageIcon, name: "Langauges" },
    { icon: helpIcon, name: "Help" },
    { icon: countryIcon, name: "Country" },
    { icon: settingIcon, name: "Settings" },
  ]);
  return (
    
    <Box
      sx={{
      
        minHeight: "100vh",
        color: "#124989",
        boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.5)",
        overflow: "auto",
        paddingBlock:'8px'
      }}
    >
      <Stack direction="row" sx={{ gap: "3px" }} alignItems="end">
        <Box
          sx={{
            width: "90px",
            height: "90px",
            border: "4px solid #124989",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={userImg}
            sx={{ width: "60px", height: "55px" }}
          />
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "700", color: "#124989" }}
          >
            Ahmed Ibrahim Ali
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Box
              sx={{ width: "25px", height: "25px" }}
              component="img"
              src={flag}
            ></Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#000000",
                marginTop: "10px",
              }}
            >
              Jordan
            </Typography>
          </Box>
        </Box>
      </Stack>

      <Box
        sx={{
          marginBlock: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {status.map((item) => {
          return (
            <Box
              key={item.title}
              sx={{
                backgroundColor: item.color,
                width: "76px",
                height: "77px",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
              }}
            >
              <Typography>{item.count}</Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "700",
                  fontFamily: "Amiko",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {links.map((link) => {
          return (
            <Box
            key={link.name}
              sx={{
                backgroundColor:
                  link.name == "Services" ? "#D76320" : "transparent",
                  cursor:'pointer'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  height: "53px",
                  paddingLeft: "20px",
                }}
              >
                <Box component="img" src={link.icon}></Box>
                <Typography
                  sx={{
                    color: link.name == "Services" ? "#FFFFFF" : "#124989",
                  }}
                >
                  {link.name}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SideBar;
