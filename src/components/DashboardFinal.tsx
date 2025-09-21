import React from "react";
import Dashboard from "./Dashboard";
import RightSidebar from "./RightSidebar";

const DashboardFinal = () => {
  return (
    <>
      <div className="flex">
        <Dashboard />
        <RightSidebar />
      </div>
    </>
  );
};

export default DashboardFinal;
