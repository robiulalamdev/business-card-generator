/* eslint-disable @next/next/no-img-element */
import useViewImage from "@/lib/hooks/useViewImage";
import { iUpload } from "@/lib/icons/icons";
import React from "react";

const LetterHeadBgInput = ({ setFile, file }) => {
  const { viewImg } = useViewImage();
  return (
    <div className="w-full h-[200px] rounded !shadow-none hover:!shadow-none font-normal bg-gray-50 flex flex-col justify-center gap-4 items-center border border-gray-500">
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
            Upload File (.jpg, and .png only)
          </small>
        </div>
      )}
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept=".png, .jpg"
        multiple={false}
        className="w-full h-full absolute opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default LetterHeadBgInput;
