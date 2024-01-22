import logo from "../../assets/house.png";
import { FaUser, FaUserTie, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
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
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="form-control">
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name..."
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <FaUserTie />
                    </div>
                    <select
                      name="role"
                      placeholder="Your Role..."
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
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <FaPhoneAlt />
                    </div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number..."
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <SiGmail />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address..."
                      className="w-full p-1.5 rounded-e-sm bg-white border border-s-0 border-gray-300 placeholder:text-gray-400 outline-none text-black"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <div className="flex items-center">
                    <div className="bg-emerald-600 p-[0.659rem] text-white rounded-s-sm">
                      <MdOutlinePassword />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password..."
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
