import DashboardHeader from "@/components/dashboard/dashboardHeader";
import DashboardSidebar from "@/components/dashboard/dashboardSidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      <DashboardSidebar />
      <div className="w-5/6 border-l  border-slate-700 ml-auto h-full">
        <DashboardHeader />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
