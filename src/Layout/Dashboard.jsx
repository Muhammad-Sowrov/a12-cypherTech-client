import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-gray-700 text-white">
        <ul className="menu text-white">
            {/* admin */}
          <li className="hover:font-bold text-center">
            <NavLink to="dashboard/all-employee-list">All User</NavLink>
          </li>

          {/* employee */}
          <li className="hover:font-bold">
            <NavLink to="dashboard/payment-history">Your Payment</NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink to="dashboard/work-sheet">Work Sheet</NavLink>
          </li>
          {/* HR */}
          <li className="hover:font-bold">
            <NavLink to="dashboard/employee-list">Employee</NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink to="dashboard/details/:slug">Employee Salary</NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink to="dashboard/progress">Progress</NavLink>
          </li>

          {/* shared */}
          <div className="border-b-2 border-solid border-white my-4 lg:mx-5 xl:mx-10" />
          <li className="hover:font-bold text-center">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink to="dashboard/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
