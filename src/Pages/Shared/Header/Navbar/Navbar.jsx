import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }>Home</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/login' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
          }>Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
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
          <a className="btn btn-ghost text-xl">Cypher<span className="text-rose-200">Tech</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="men list-none gap-5 menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
