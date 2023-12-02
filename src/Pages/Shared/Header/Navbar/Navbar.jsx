import { NavLink } from "react-router-dom";
import logo from "/icon.svg";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleOut = () => {
    logOut().then().then();
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      {user?.email ? (
        <li>
          <NavLink
            to="/login"
            onClick={handleOut}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
            }
          >
            Log Out
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-slate-200 fixed z-10 bg-opacity-25 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                // viewBox="0 0 24 24"
                viewBox="10 10 10 10"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="men list-none gap-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} className="w-6 rounded-full" alt="" />
            Cypher<span className="text-green-500">Tech</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="men list-none gap-5 menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
