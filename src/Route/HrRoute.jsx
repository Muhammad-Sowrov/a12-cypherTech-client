import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useHr from "../Hooks/useHr";
import { Navigate, useLocation } from "react-router-dom";

const HrRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isHr, isHrLoading] = useHr();
  const location = useLocation();
  if (loading || isHrLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isHr) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default HrRoute;
