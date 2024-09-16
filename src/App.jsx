import { useContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import { DarkModeContext } from "./Components/Context/DarkModeContext";
import SideBarToggleContextProvider from "./Components/Context/SideBarToggleContext";
import Services from "./Components/Services/Services";
import StatusContextProvider from "./Components/Context/StatusContext";
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
import "./i18n"; // استيراد ملف i18n
import ServicesCat from "./Components/Services/ServicesCat";
import CompanyDetails from "./Components/Company/CompanyDetails";
import Cv from "./Components/Company/Cv";
import Products from "./Components/Company/Products";
import Compoanies from "./Components/Company/Companies";

function App() {
  let { darkMode } = useContext(DarkModeContext);
  const { i18n } = useTranslation(); // استخدام useTranslation

  // تحديد اتجاه الـ RTL أو LTR بناءً على اللغة
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const theme = createTheme({
    direction: i18n.language === "ar" ? "rtl" : "ltr", // تحديد الاتجاه
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
          path: "/services/:cat",
          element: <ServicesCat />,
        },
        {
          path: "/services/:categories/:specialcategory",
          element: <Compoanies />,
        },
        {
          path: "/services/:categories/:specialcategory/:company",
          element: <CompanyDetails />,
        },
        {
          path: "/services/:categories/:specialcategory/:company/cv",
          element: <Cv />,
        },
        {
          path: "/services/:categories/:specialcategory/:company/products",
          element: <Products />,
        },
        {
          path: "/company",
          element: <Compoanies />,
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
