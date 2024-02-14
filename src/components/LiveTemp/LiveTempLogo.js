import React from "react";

const LiveTempLogo = ({ logo }) => {
  return (
    <div className="flex justify-center items-center mt-16">
      {logo ? (
        <div className="flex justify-center items-center">
          <img src={logo} alt="" className="max-w-[200px] object-contain" />
        </div>
      ) : (
        <div className="border bg-gray-100 w-full max-w-[400px] h-[200px] flex justify-center items-center">
          <h1 className="text-sm font-semibold text-gray-600">Logo Here</h1>
        </div>
      )}
    </div>
  );
};

export default LiveTempLogo;
