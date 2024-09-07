import { Box, Stack, Typography } from "@mui/material";
import userImg from "../../assets/user.png";
import flag from "../../assets/flag.png";
function SideBar() {
  return (
    <Box
      sx={{
        width: "240px",
        height: "100vh",
        color: "#124989",
        boxShadow: "10px 0px 20px black",
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
        <Box
          sx={{
            backgroundColor: "#124989",
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
          <Typography>20</Typography>
          <Typography>Chats</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#124989",
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
          <Typography>20</Typography>
          <Typography>Chats</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#124989",
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
          <Typography>20</Typography>
          <Typography>Chats</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#124989",
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
          <Typography>20</Typography>
          <Typography>Chats</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
