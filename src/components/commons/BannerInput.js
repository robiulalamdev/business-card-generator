/* eslint-disable @next/next/no-img-element */
import useViewImage from "@/lib/hooks/useViewImage";
import { iUpload } from "@/lib/icons/icons";
import React from "react";

const BannerInput = ({ setFile, file }) => {
  const { viewImg } = useViewImage();
  return (
    <div className="w-full h-full bg-gray-100 relative cursor-pointer flex justify-center items-center">
      {file ? (
        <>
          <img
            src={viewImg(file)}
            alt=""
            className="w-full h-full object-contain"
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-[40px]">{iUpload}</div>
          <small className="text-gray-500">
            Upload Banner (600 X 600) Resolution
          </small>
        </div>
      )}
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept=".png, .jpg, .jpeg"
        multiple={false}
        className="w-full h-full absolute opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default BannerInput;
