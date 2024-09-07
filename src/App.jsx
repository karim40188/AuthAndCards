import { Box } from "@mui/material";
import Login from "./Components/Login/Login";
import "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Layout from "./Components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        
        {
          index:true,
          element: <Login />,
        },
        {
          path:"/login",
          element: <Login />,
        },
        {
          path: "/showcards",
          element: <SideBar />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Box>
        <Login />
      </Box>
    </RouterProvider>
  );
}

export default App;
