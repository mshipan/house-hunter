import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
