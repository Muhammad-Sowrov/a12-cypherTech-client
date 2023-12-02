import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const WorkSheet = () => {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {

    const formData = {
      task: data.task,
      startDate: data.startDate,
      working_time: data.working_time,
      email: user.email,
      name: user.displayName
    };
    console.log(formData);
    axiosSecure.post("/work-sheet", formData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Work-sheet submitted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="bg-teal-50 items-center border border-r-lime-300 rounded-lg p-16 mr-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-black text-sm font-semibold">
              Task
            </label>
            <select
              {...register("task", { required: true })}
              className="select select-bordered w-full mb-5"
            >
              <option disabled defaultValue={null}>
                Task
              </option>
              <option value={"Sales"}>Sales</option>
              <option value={"Support"}>Support</option>
              <option value={"Content"}>Content</option>
              <option value={"Paper-Work"}>Paper-Work</option>
            </select>
            {errors.task && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">
              Hours Worked
            </label>
            <input
              {...register("working_time", { required: true })}
              type="number"
              name="working_time"
              placeholder="Type here"
              className="input input-bordered w-full mb-5"
            />
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">
              Date of Work
            </label>
            <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <DatePicker
                  className="input input-bordered w-full mb-5"
                  selected={field.value}
                  onChange={(date) => setValue("startDate", date)}
                />
              )}
            />
          </div>
          <div>
            <button
              className="btn btn-ghost outline w-full text-black hover:bg-green-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkSheet;
