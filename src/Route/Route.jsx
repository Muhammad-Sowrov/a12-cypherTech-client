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
import Contact from "../Pages/Dashboard/Contact/Contact";

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
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: "all-employee-list",
            element: <AllEmployee></AllEmployee>
        },
        {
            path: "payment-history",
            element: <PaymentHistory></PaymentHistory>
        },
        {
            path: "work-sheet",
            element: <WorkSheet></WorkSheet>
        },
        {
            path: "employee-list",
            element: <Employee></Employee>
        },
        {
            path: "details/:slug",
            element: <Salary></Salary>
        },
        {
            path: "progress",
            element: <Progress></Progress>
        },
        {
            path: "contact",
            element: <Contact></Contact>
        }
    ]
  }
]);
export default Route;
