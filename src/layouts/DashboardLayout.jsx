import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardSideBarNav from "../components/shared/DashboardSideBarNav";

const DashboardLayout = () => {
  const dashboardRoot = window.location.pathname;

  if (dashboardRoot === "/dashboard") {
    return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col p-5">
          {/* Page content here */}
          <Dashboard />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <DashboardSideBarNav />
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col p-5">
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <DashboardSideBarNav />
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
