import { ThemeProvider, createTheme } from "@mui/material";
import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import { DarkModeContext } from "./Components/Context/DarkModeContext";
import SideBarToggleContextProvider from "./Components/Context/SideBarToggleContext";
import Services from "./Components/Services/Services";
import StatusContextProvider from "./Components/Context/StatusContext";
import Company from "./Components/Company/Company";
import Sales from "./Components/Sales/Sales";
import Ads from "./Components/Ads/Ads";
import Suppliers from "./Components/Suppliers/Suppliers";
import Country from "./Components/Country/Country";
import Clients from "./Components/Clients/Clients";
import Purchases from "./Components/Purchases/Purchases";
import Reports from "./Components/Reports/Reports";
import Languages from "./Components/Langauges/Languages";
import Help from "./Components/Help/Help";
import Settings from "./Components/Settings/Settings";

function App() {
  let { darkMode } = useContext(DarkModeContext);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#D76320",
      },
      background: {
        default: darkMode ? "rgb(24, 24, 24)" : "#f7f7f7",
        paper: darkMode ? "#444" : "#fff",
      },
      text: {
        primary: darkMode ? "#fff" : "#000",
        secondary: "#D76320",
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
          path: "/services",
          element: <Services />,
        },
        {
          path: "/company",
          element: <Company />,
        },
        {
          path: "/clients",
          element: <Clients />,
        },
        {
          path: "/suppliers",
          element: <Suppliers />,
        },
        {
          path: "/purchases",
          element: <Purchases />,
        },
        {
          path: "/sales",
          element: <Sales />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/ads",
          element: <Ads />,
        },
        {
          path: "/languages",
          element: <Languages />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    { index: true, element: <Login /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <StatusContextProvider>
        <SideBarToggleContextProvider>
          <RouterProvider router={router} />
        </SideBarToggleContextProvider>
      </StatusContextProvider>
    </ThemeProvider>
  );
}

export default App;
