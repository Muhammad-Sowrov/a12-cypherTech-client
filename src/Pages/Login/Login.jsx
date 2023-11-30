import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    
    const {signIn} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
      } = useForm();

      const onsubmit = data => {
        
        console.log(data);

        signIn(data.email, data.password)
        .then(result => {
          console.log(result.user);
          Swal.fire({
            title: "Login successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          reset()
        })

      }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-semibold">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{6,}$/i,
                })}
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Password"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password?.type === "minLength" && (
                <span className="text-red-700">
                  Password must be at-lest 6 character
                </span>
              )}
              {errors.password?.type === "required" && (
                <span className="text-red-700">This field is required</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-700">
                  Password must have a uppercase, lowercase, number and special
                  character
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-ghost outline w-full text-black hover:bg-green-300"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Do not have an account?{" "}
              <NavLink to="/register" className="text-green-500 hover:underline">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;