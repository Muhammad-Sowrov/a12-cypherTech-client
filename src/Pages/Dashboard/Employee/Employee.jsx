import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoCheckmark, IoClose } from "react-icons/io5";
import Swal from "sweetalert2";

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

  const handleVerify = (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/verify/${data._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
          }
        });

        Swal.fire({
          title: "Made!",
          text: `You verified ${data.name}`,
          icon: "success",
        });
      }
    });
  };


  const handleUnVerify = (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/unVerify/${data._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
          }
        });
  
        Swal.fire({
          title: "Made!",
          text: `You unverified ${data.name}`,
          icon: "success",
        });
      }
    });
  };

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
              <th className="font-bold">IsVerify</th>
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
                {/* <td>
                  {data?.isVerify == false
                    ? (
                        <button
                        onClick={()=>handleVerify(data)}
                        >
                          <IoClose className="text-2xl"></IoClose>
                        </button>
                      ) || 
                      data?.isVerify == true  (
                          <button
                          // onClick={()=> handleVerify(data)}
                          
                          >
                            <IoCheckmark className="text-2xl"></IoCheckmark>
                          </button>
                        )
                    : ""}
                </td> */}
                <td>
                  {data?.isVerify === false ? (
                    <button onClick={() => handleVerify(data)}>
                      <IoClose className="text-2xl" />
                    </button>
                  ) : data?.isVerify === true ? (
                    <button onClick={() => handleUnVerify(data)}>
                      <IoCheckmark className="text-2xl" />
                    </button>
                  ) : (
                    ""
                  )}
                </td>
                <td>{data.bankAc}</td>
                <td>{data.salary}</td>
                <td>
                  <button className="btn btn-xs btn-ghost outline hover:bg-stone-100 w-full">
                    Pay
                  </button>
                </td>
                <td>
                  <button className="btn btn-xs btn-ghost outline hover:bg-stone-100 w-full">
                    Details
                  </button>
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
