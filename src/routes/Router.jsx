import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/authPages/Register";
import Login from "../pages/authPages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import AddNewHouse from "../pages/dashboardPages/AddNewHouse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "add-new-house",
        element: <AddNewHouse />,
      },
    ],
  },
]);

export default router;
