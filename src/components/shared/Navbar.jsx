import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/house.png";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { logout } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    navigate("/login");
  };
  return (
    <div className="bg-gray-800 py-6">
      <div className="w-2/3 mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Website Logo" className="w-10" />
            <h1 className="text-yellow-500 font-serif text-2xl mt-2 font-semibold">
              HouseHunter
            </h1>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center gap-8">
            <li className="font-serif text-white hover:text-green-500">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-serif text-white hover:text-green-500">
              <NavLink to="/bookings">Booking</NavLink>
            </li>
            <li className="font-serif text-white hover:text-green-500">
              <NavLink to="/houses">House</NavLink>
            </li>
            <li className="font-serif text-white hover:text-green-500">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            {!isLoggedIn ? (
              <li className="font-serif text-white hover:text-green-500 bg-green-500 hover:bg-transparent transition-all ease-in-out duration-300">
                <button
                  onClick={handleLogout}
                  className="border border-green-500 px-4 py-1"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="font-serif text-white hover:text-green-500">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="font-serif text-white hover:text-green-500">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
