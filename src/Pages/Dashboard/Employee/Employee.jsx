import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Employee = () => {
  const axiosSecure = useAxiosSecure();
  const { data: employee = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const filteredUsers = employee.filter((user) => user.role === "Employee");
//   console.log(filteredUsers);

  return (
    <div className="my-4 ml-5">
      <h3 className="text-xl font-bold">
        Total Employee: {filteredUsers.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="font-bold text-black"></th>
              <th className="font-bold text-black">Name</th>
              <th className="font-bold text-black">Email</th>
              <th className="font-bold text-black">Bank AC.</th>
              <th className="font-bold text-black">Salary</th>
              <th className="font-bold text-black">Pay</th>
              <th className="font-bold text-black">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((data, idx) => (
              <tr key={data._id}>
                <th>{idx + 1}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.bankAc}</td>
                <td>{data.salary}</td>
                <td>
                    <button className="btn btn-xs btn-ghost outline hover:bg-stone-100 w-full">Pay</button>
                </td>
                <td>
                <button className="btn btn-xs btn-ghost outline hover:bg-stone-100 w-full">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
