import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Progress = () => {
  const [progress, setProgress] = useState([]);
  const axiosSecure = useAxiosSecure();
  axiosSecure.get("/work-sheet").then((res) => {
    setProgress(res.data);
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Employee Name</th>
              <th>Tasks</th>
              <th>Hour</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {progress.map((progresses, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{progresses.name}</td>
                <td>{progresses.task}</td>
                <td>{progresses.working_time} hour</td>
                <td>{progresses.startDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Progress;
