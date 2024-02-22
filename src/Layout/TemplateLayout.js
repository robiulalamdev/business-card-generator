import React from "react";

const TemplateLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start w-full p-0 m-0">
      <div className="bg-blue-600 w-[350px] h-screen"></div>
      <div className="flex-grow w-full h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default TemplateLayout;
