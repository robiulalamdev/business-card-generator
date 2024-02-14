/* eslint-disable @next/next/no-img-element */
import React from "react";

const LiveBanner = ({ banner }) => {
  return (
    <div className="flex justify-center items-center mt-16">
      {banner ? (
        <div className="flex justify-center items-center">
          <img
            src={banner}
            alt=""
            className="max-w-[800px] max-h-[300px] object-contain"
          />
        </div>
      ) : (
        <div className="border bg-gray-100 w-full max-w-[800px] max-h-[300px] flex justify-center items-center">
          <h1 className="text-sm font-semibold text-gray-600">Banner Here</h1>
        </div>
      )}
    </div>
  );
};

export default LiveBanner;
