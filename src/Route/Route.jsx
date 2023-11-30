import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import User from "../Pages/Dashboard/User/User";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    //   {
    //     path: "/dashboard",
    //     element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    //   }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: "/dashboard/user",
            element: <User></User>
        }
    ]
  }
]);
export default Route;
