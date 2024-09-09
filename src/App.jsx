import { ThemeProvider, createTheme } from "@mui/material";
import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import { DarkModeContext } from "./Components/Context/DarkModeContext";

function App() {
  let { darkMode } = useContext(DarkModeContext);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#D76320",
      },
      background: {
        default: darkMode ? "#121212" : "#fff",
        paper: darkMode ? "#1E1E1E" : "#fff",
      },
      text: {
        primary: darkMode ? "#fff" : "#0F1F32",
        secondary: darkMode ? "#B5B5B5" : "#0F1F32",
      },
    },
    typography: {
      body1: {
        fontSize: "15px",
        fontWeight: "700",
        fontFamily: "Amiko",
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
