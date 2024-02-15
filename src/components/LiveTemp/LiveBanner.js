/* eslint-disable @next/next/no-img-element */
import { downloadStringImage } from "@/lib/globalServices";
import { iDown } from "@/lib/icons/icons";
import { Button } from "@material-tailwind/react";
import React from "react";

const LiveBanner = ({ banner }) => {
  return (
    <>
      <div className="grid md:grid-cols-4 items-start">
        <div className="flex flex-col items-end justify-end w-full px-4">
          <h1 className="font-semibold">Banner</h1>
          <Button
            onClick={() => downloadStringImage(banner)}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8  bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
          >
            Download
          </Button>
        </div>
        <div className="flex justify-center items-center border border-black p-4 col-span-2 relative">
          {banner ? (
            <div className="flex justify-center items-center">
              <img
                src={banner}
                alt=""
                className="max-w-[800px] max-h-[300px] object-contain"
              />
            </div>
          ) : (
            <div className="border bg-gray-100 w-full max-w-[800px] h-[300px] flex justify-center items-center">
              <h1 className="text-sm font-semibold text-gray-600">
                Banner Here
              </h1>
            </div>
          )}

          <div className="absolute bottom-0 right-0 w-fit h-fit flex justify-center items-center">
            <Button
              onClick={() => downloadStringImage(banner)}
              className="rounded-sm shadow-none hover:shadow-none h-8 bg-primary p-0 w-14 flex justify-center items-center text-xs text-current text-white"
            >
              {iDown}
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default LiveBanner;
