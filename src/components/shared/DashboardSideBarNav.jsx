import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useGetUserByEmailQuery } from "../../redux/features/api/usersApi";

const DashboardSideBarNav = () => {
  const { user } = useAuth();

  const {
    data: filteredUser,
    isLoading,
    isError,
  } = useGetUserByEmailQuery(user?.email);
  if (isLoading) {
    return <p className="text-lg text-black font-mono">Loading...</p>;
  }
  if (isError) {
    return (
      <p className="text-lg text-black font-mono">Error Loading data...</p>
    );
  }

  const navItems =
    filteredUser?.role === "houseowner" ? (
      <>
        <li>
          <NavLink to="add-new-house">Add New House</NavLink>
        </li>
        <li>
          <NavLink to="my-houses">My Houses</NavLink>
        </li>
        <li>
          <NavLink to="all-bookings">Bookings</NavLink>
        </li>
      </>
    ) : (
      <>
        <li>
          <NavLink to="my-bookings">My Bookings</NavLink>
        </li>
        <li></li>
      </>
    );
  return (
    <div className="fixed top-0 left-0 right-0  flex items-center justify-center md:justify-start px-3 md:px-0 lg:px-0 xl:px-0 2xl:px-0 gap-5">
      <div>
        {/* large screen Nav */}
        <div className="hidden md:block lg:block xl:block 2xl:block mt-20 pl-7">
          <nav className="text-white">
            <ul className="flex flex-col items-start gap-7">
              {/* nav items go here */}
              {navItems}
            </ul>
          </nav>
        </div>
        {/* small screen nav */}
        <div className=" flex flex-col justify-center items-center md:hidden lg:hidden xl:hidden 2xl:hidden w-full z-10 my-20">
          <nav className="text-white ">
            <ul className=" w-full flex flex-col items-start gap-7">
              {/* nav items go here */}
              {navItems}
            </ul>
          </nav>
        </div>
      </div>
      {/* avatar */}
    </div>
  );
};

export default DashboardSideBarNav;
