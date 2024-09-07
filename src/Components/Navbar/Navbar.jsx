import { Box } from "@mui/material";
import searchIcon from "../../assets/vectors/search.png";
function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#124989",
        height: "126px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box component="form">
        <Box sx={{ display: "flex", position: "relative" }}>
          <input
            type="search"
            placeholder="search for products"
            style={{
              width: "724px",
              height: "61px",
              borderRadius: "10px",
              margin: "0 auto",
              paddingInline: "30px",
              color:'#BDB8B8',
              fontSize:'20px',
              fontFamily:'Amiko',
              fontWeight:'700',

            
            }}
          />
          <Box
            sx={{
              width: "52px",
              height: "41px",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            component="img"
            src={searchIcon}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
