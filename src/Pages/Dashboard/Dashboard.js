import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // // console.log("dashboard", user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content text-center">
          {/* <!-- Page content here --> */}
          <h2 className="text-2xl font-bold text-purple-500 mb-8">
            Well come To Your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Reviews</Link>
            </li>
            <li>
              <Link to="/dashboard/history">My History</Link>
            </li>
            <li>
              {admin && (
                <>
                  <Link to="/dashboard/users">All Users</Link>
                  <Link to="/dashboard/addDoctor">Add A Doctors</Link>
                  <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
