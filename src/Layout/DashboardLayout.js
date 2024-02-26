import Header from "@/components/shared/Header";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-grow h-full w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
