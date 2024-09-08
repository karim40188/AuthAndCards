import { Box } from "@mui/material";
import searchIcon from "../../assets/vectors/search.png";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#124989", 
        height: { xs: "auto", sm: "126px" }, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "10px", sm: "0" }, 
      }}
    >
      <Box
        component="form"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: { xs: "100%", sm: "80%" },
          }}
        >
          <input
            type="search"
            placeholder="Search for products"
            style={{
              width: "100%", 
              maxWidth: "900px", 
              height: "70px", 
              borderRadius: "10px",
              paddingInline: "40px",
              color: "#BDB8B8",
              fontSize: "18px", 
              fontFamily: "Amiko",
              fontWeight: "700",
              boxSizing: "border-box",
            }}
          />
          <Box
            sx={{
              width: { xs: "40px", sm: "52px" }, 
              height: { xs: "30px", sm: "41px" },
              position: "absolute",
              top: "50%",
              right: "15px", 
              transform: "translateY(-50%)", 
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
