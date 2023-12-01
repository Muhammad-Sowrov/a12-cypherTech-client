import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const AllEmployee = () => {
  const axiosSecure = useAxiosSecure();
  const { data: employee = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(employee);
  const [isFired, serIsFired] = useState(false);
  const handleFired = (user) => {
    console.log(user);
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Fire!",
    }).then((result) => {
      if (result.isConfirmed) {
        serIsFired(!isFired)
        Swal.fire({
          title: "Fired!",
          text: `You just fire file ${user.name}`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="my-4 ml-5">
      <h3 className="text-xl font-bold">Total Users: {employee.length}</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="font-bold"></th>
                <th className="font-bold">Name</th>
                <th className="font-bold">Email</th>
                <th className="font-bold">Role</th>
                <th className="font-bold">Salary</th>
                <th className="font-bold">Action</th>
                <th className="font-bold">Fired</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>${user.salary}</td>
                  <td>
                    <button></button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleFired(user)}
                      className="text-xl text-red-500"
                    >
                      {user && isFired? 'FIRED' : <FaTrashAlt></FaTrashAlt>}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEmployee;
