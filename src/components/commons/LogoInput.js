/* eslint-disable @next/next/no-img-element */
import useViewImage from "@/lib/hooks/useViewImage";
import { iUpload } from "@/lib/icons/icons";
import { Button } from "@material-tailwind/react";
import React, { useRef } from "react";

const LogoInput = ({ file, setFile, label }) => {
  const { viewImg } = useViewImage();
  const fileRef = useRef();

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      fileRef.current.value = null;
      return;
    }
  };
  return (
    <>
      <div className="">
        {label && (
          <label
            className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
            htmlFor=""
          >
            {label}
          </label>
        )}

        <Button
          onClick={() => fileRef.current.click()}
          className={`w-full h-[120px] rounded !shadow-none hover:!shadow-none font-normal bg-gray-50 flex flex-col justify-center gap-4 items-center border border-gray-500`}
        >
          {file ? (
            <img
              className="w-full h-full object-contain"
              src={viewImg(file)}
              alt=""
            />
          ) : (
            <>
              <div className="max-w-[40px] text-primary">{iUpload}</div>
              <h1 className="text-[12px] text-gray-500 font-open-sans normal-case">
                Upload Image <span>(.png, .jpg, .jpeg)</span>
              </h1>
            </>
          )}
          <input
            ref={fileRef}
            onChange={(e) => handleFile(e)}
            type="file"
            multiple={false}
            accept=".png, .jpg, .jpeg"
            className="hidden opacity-0"
          />
        </Button>
      </div>
    </>
  );
};

export default LogoInput;
