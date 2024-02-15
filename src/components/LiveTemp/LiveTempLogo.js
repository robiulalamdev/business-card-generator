/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import React from "react";

const LiveTempLogo = ({ logo }) => {
  const printContainer = async () => {
    const element = document.getElementById("logoPrint"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="grid md:grid-cols-4 items-start mt-16">
        <div className="flex flex-col items-end justify-end w-full px-4">
          <h1 className="font-semibold">Brand Logo</h1>
          <Button
            onClick={() => printContainer()}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8  bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
          >
            Download
          </Button>
        </div>
        <div className="flex justify-center items-center border-x border-t border-black p-4 col-span-2">
          {logo ? (
            <div className="flex justify-center items-center">
              <img
                id="logoPrint"
                src={logo}
                alt=""
                className="max-w-[200px] ax-w-[100px] max-h-[100px] rounded-full object-contain"
              />
            </div>
          ) : (
            <div
              id="logoPrint"
              className="border bg-gray-100 w-full max-w-[400px] h-[200px] flex justify-center items-center"
            >
              <h1 className="text-sm font-semibold text-gray-600">Logo Here</h1>
            </div>
          )}
        </div>
        <div className="w-full"></div>
      </div>
    </>
  );
};

export default LiveTempLogo;
