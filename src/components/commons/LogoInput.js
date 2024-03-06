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
            className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
            htmlFor=""
          >
            {label}
          </label>
        )}

        <Button
          onClick={() => fileRef.current.click()}
          className={`w-full h-[120px] rounded shadow-none border-2 hover:shadow-none bg-primary_gw flex flex-col justify-center gap-4 items-center`}
        >
          {/* <input
            type="text"
            name="test"
            required={!file}
            className="opacity-0"
          /> */}
          {file ? (
            <img
              className="w-full h-full object-contain"
              src={viewImg(file)}
              alt=""
            />
          ) : (
            <>
              <div className="max-w-[40px] text-primary">{iUpload}</div>
              <h1 className="text-gray-500 text-sm font-normal !normal-case text-current">
                Upload Image <span>(.png, .jpg, jpeg)</span>
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
