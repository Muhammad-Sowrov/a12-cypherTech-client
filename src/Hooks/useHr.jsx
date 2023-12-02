import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useHr = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isHr, isPending: isHrLoading } = useQuery({
    queryKey: [user?.email, "isHr"],
    enabled: !loading,
    queryFn: async () => {
      //   console.log("is hr", user);
      const res = await axiosSecure.get(`/users/hr/${user.email}`);
      //   console.log(res.data);
      return res.data?.hr;
    },
  });
  return [isHr, isHrLoading];
};

export default useHr;
