// import { Box, Grid2, ThemeProvider, createTheme } from "@mui/material";
// import { useContext } from "react";
// import Cards from "../Cards/Cards";
// import Navbar from "../Navbar/Navbar";
// import SideBar from "../SideBar/SideBar";
// import { DarkModeContext } from "../Context/DarkModeContext";
// import { SideBarToggleContext } from "../Context/SideBarToggleContext";
// function Home() {
//   let { darkMode } = useContext(DarkModeContext);
//   let { isSidebarOpen } = useContext(SideBarToggleContext);
//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? "dark" : "light",
//       primary: {
//         main: "#124989",
//       },
//       background: {
//         default: darkMode ? "rgb(24, 24, 24)" : "#f7f7f7",
//       paper: darkMode ? "#444" : "#fff",
//       },
//       text: {
//         primary: darkMode ? "#fff" : "#000",
//         secondary: "#D76320",
//       },
//     },
//     typography: {
//       body1: {
//         fontSize: "15px",
//         fontWeight: "700",
//         fontFamily: "Amiko",
//       },
//     },
//   });

//   return (
  
//       <Grid2 container>
//         <Grid2 item xs={12} md={4}>
//           <SideBar />
//         </Grid2>
//         <Grid2
//           item
//           xs={12}
//           md={8}
//           sx={{
        
//             display: "flex",
//             marginLeft: isSidebarOpen ? "20%" : "0",
//           }}
//         >
//           <Box
//             sx={
//               {
//                 // zIndex: "1200",
//               }
//             }
//           >
//             <Box>
//               <Navbar />
//               <Cards />
//             </Box>
//           </Box>
//         </Grid2>
//       </Grid2>
  
//   );
// }

// export default Home;
