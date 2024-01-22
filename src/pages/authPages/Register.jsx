import { useForm } from "react-hook-form";
import logo from "../../assets/house.png";
import { FaUser, FaUserTie, FaPhoneAlt, FaLock } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const password = watch("password");
  return (
    <div className="bg-emerald-400 h-screen">
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-1/5 rounded-lg">
          <div className="bg-emerald-600 flex flex-col items-center justify-center gap-1 py-5 rounded-t-sm">
            <img src={logo} alt="Website Logo" className="w-14" />
            <h1 className="text-white font-mono text-3xl font-semibold">
              Please Register
            </h1>
          </div>
          <div className="bg-white p-4 w-full rounded-b-sm">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-3">
                <div className="form-control">
                  {errors.name && (
                    <p className="text-red-600 font-mono">
                      {errors.name.type === "required" &&
                        "Full Name is required"}
                    </p>
                  )}
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name..."
                      {...register("name", { required: true })}
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    />
                  </div>
                </div>

                <div className="form-control">
                  {errors.role && (
                    <p className="text-red-600 font-mono">
                      {errors.role.type === "required" && "Role is required"}
                    </p>
                  )}
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <FaUserTie />
                    </div>
                    <select
                      name="role"
                      placeholder="Your Role..."
                      {...register("role", { required: true })}
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    >
                      <option value="" className="text-gray-400">
                        Select Role
                      </option>
                      <option value="houseowner">House Owner</option>
                      <option value="houserenter">House Renter</option>
                    </select>
                  </div>
                </div>

                <div className="form-control">
                  {errors.phone && (
                    <p className="text-red-600 font-mono">
                      {errors.phone.type === "required" && "Role is required"}
                    </p>
                  )}
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <FaPhoneAlt />
                    </div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number..."
                      {...register("phone", { required: true })}
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    />
                  </div>
                </div>

                <div className="form-control">
                  {errors.email && (
                    <p className="text-red-600 font-mono">
                      {errors.email.type === "required" && "Email is required"}
                    </p>
                  )}
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <SiGmail />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address..."
                      {...register("email", { required: true })}
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    />
                  </div>
                </div>

                <div className="form-control">
                  {errors.password && (
                    <p className="text-red-600 font-mono">
                      {errors.password.type === "required" &&
                        "Password is required"}
                      {errors.password.type === "minLength" &&
                        "Password must be at least 6 characters"}
                      {errors.password.type === "pattern" &&
                        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"}
                    </p>
                  )}
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <FaLock />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password..."
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9]).{6}$/,
                      })}
                      // REGEX
                      // here /^ $/ this is start and end of regex
                      // (?=.*[A-Z]) this is one uppercase character
                      // (?=.*[a-z]) this is one lowercase character
                      // (?=.*[0-9]) this is one digit character
                      // (?=.*[!@#$&*]) this is one special character
                      // and (?=.*[A-Z].*[A-Z]) this is two uppercase character if you want to have more use this way
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    />
                  </div>
                </div>

                <div className="form-control">
                  {errors.confirmPassword && (
                    <p className="text-red-600 font-mono">
                      {errors.confirmPassword.type === "required" &&
                        "Confirm Password is required"}
                      {errors.confirmPassword.type === "validate" &&
                        "Passwords do not match"}
                    </p>
                  )}
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <FaLock />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password..."
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <button className="bg-emerald-600 hover:bg-white w-full py-2 border border-emerald-600 text-white hover:text-black font-serif text-lg font-medium transition-all ease-in-out duration-300">
                  Register
                </button>

                <div>
                  <h1 className="text-black font-mono">
                    Already a member?{" "}
                    <Link to="/login">
                      <span className="text-emerald-600 hover:underline">
                        LogIn now
                      </span>
                    </Link>
                  </h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
