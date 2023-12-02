import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllEmployee from "../Pages/Dashboard/AllEmployee/AllEmployee";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import WorkSheet from "../Pages/Dashboard/WorkSheet/WorkSheet";
import Employee from "../Pages/Dashboard/Employee/Employee";
import Salary from "../Pages/Dashboard/Salary/Salary";
import Progress from "../Pages/Dashboard/Progress/Progress";
import Contact from "../Pages/Contact/Contact";
import Contacts from "../Pages/Dashboard/Contact/Contacts";
import AdminRoute from "./AdminRoute";

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
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: "all-employee-list",
            element: <AdminRoute><AllEmployee></AllEmployee></AdminRoute>
        },
        {
            path: "payment-history",
            element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },
        {
            path: "work-sheet",
            element: <PrivateRoute><WorkSheet></WorkSheet></PrivateRoute>
        },
        {
            path: "employee-list",
            element: <PrivateRoute><Employee></Employee></PrivateRoute>
        },
        {
            path: "details/:slug",
            element: <PrivateRoute><Salary></Salary></PrivateRoute>
        },
        {
            path: "progress",
            element: <PrivateRoute><Progress></Progress></PrivateRoute>
        },
        {
            path: "contact",
            element: <Contacts></Contacts>
        }
    ]
  }
]);
export default Route;
