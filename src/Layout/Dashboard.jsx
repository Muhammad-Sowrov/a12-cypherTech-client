import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useHr from "../Hooks/useHr";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isHr] = useHr();
  // console.log(isHr);
  // console.log(isAdmin);

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-gray-700 text-white">
        <ul className="menu text-white">
          {/* admin */}
          {isAdmin ? (
            <li className="hover:font-bold text-center">
              <NavLink to="all-employee-list">All User</NavLink>
            </li>
          ) : isHr ? (
            <>
              {/* HR */}
              <li className="hover:font-bold">
                <NavLink to="employee-list">Employee</NavLink>
              </li>
              <li className="hover:font-bold">
                <NavLink to="details/:slug">Employee Salary</NavLink>
              </li>
              <li className="hover:font-bold">
                <NavLink to="progress">Progress</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="hover:font-bold">
                <NavLink to="payment-history">Your Payment</NavLink>
              </li>
              <li className="hover:font-bold">
                <NavLink to="work-sheet">Work Sheet</NavLink>
              </li>
            </>
          )}
          {/* shared */}
          <div className="border-b-2 border-solid border-white my-4 lg:mx-5 xl:mx-10" />
          <li className="hover:font-bold text-center">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink to="contact">Contact</NavLink>
          </li>

          {/* employee */}
        </ul>
      </div>

      <div className="w-full my-4 ml-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
