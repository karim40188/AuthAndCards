import { Box, Button } from "@mui/material";
import logo from "../../assets/cards_images/shadady.jpg";
import { FaRegEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CompanyDetails() {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "200px", borderRadius: "12px", overflow: "hidden" }}>
        <Box
          sx={{ width: "100%", borderRadius: "12px" }}
          component="img"
          src={logo}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Button onClick={()=>{
            navigate('cv')
        }} variant="contained" sx={{ width: "200px", mt: "12px" }}>
          CV
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#0d1f35", width: "200px" }}
          onClick={()=>{
            navigate('products')
          }}
        >
          منتجات
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e6e7e9",
            width: "200px",
            color: "primary.main",
            paddingBlock: "10px",
          }}
        
        >
          <FaRegEnvelope />
        </Button>
      </Box>
    </Box>
  );
}

export default CompanyDetails;
