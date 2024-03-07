/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const LetterHead = ({ data }) => {
  const printLatterHead = async () => {
    const element = document.getElementById("latterHead"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const componentRef1 = useRef();
  const componentRef2 = useRef();

  const handlePrint1 = useReactToPrint({
    content: () => componentRef1.current,
  });

  const handlePrint2 = useReactToPrint({
    content: () => componentRef2.current,
  });

  return (
    <div className="grid grid-cols-2 gap-8 w-full h-full p-4">
      <div
        ref={componentRef1}
        className="w-full h-full bg-white py-16"
        style={{
          backgroundImage: `url(${data?.template?.letter_head_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`h-full w-full`}>
          <div className="flex justify-between items-start max-w-[600px] mx-auto">
            <img
              src={data?.template?.logo}
              alt=""
              className="h-[80px] w-[80px] object-cover rounded-full"
            />
            <div>
              {data?.template?.name && (
                <h1 className="font-bold uppercase text-blue-gray-800">
                  {data?.template?.name}
                </h1>
              )}
              {data?.template?.footer?.contact_no && (
                <p className="text-xs text-blue-gray-700">
                  {data?.template?.footer?.contact_no}
                </p>
              )}
              {data?.template?.footer?.email && (
                <p className="text-xs text-gray-600">
                  {data?.template?.footer?.email}
                </p>
              )}
              {data?.template?.footer?.website && (
                <p className="text-xs text-gray-600">
                  {data?.template?.footer?.website}
                </p>
              )}
              {data?.template?.footer?.address && (
                <p className="text-xs text-gray-600">
                  {data?.template?.footer?.address}
                </p>
              )}
            </div>
          </div>
        </div>
        <Button
          onClick={() => handlePrint1()}
          size="sm"
          className="ml-16 print:hidden rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
        >
          Download
        </Button>
      </div>

      <div
        ref={componentRef2}
        className="w-full h-full bg-white py-16"
        style={{
          backgroundImage: `url(${data?.template?.letter_head_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`h-full w-full`}>
          <div className="flex justify-between items-start max-w-[600px] mx-auto">
            <img
              src={data?.template?.logo}
              alt=""
              className="h-[80px] w-[80px] object-cover rounded-full"
            />
            <div>
              {data?.template?.name && (
                <h1 className="font-bold uppercase text-blue-gray-800">
                  {data?.template?.name}
                </h1>
              )}
              {data?.template?.footer?.contact_no && (
                <p className="text-xs text-blue-gray-700">
                  {data?.template?.footer?.contact_no}
                </p>
              )}
              {data?.template?.footer?.email && (
                <p className="text-xs text-gray-600">
                  {data?.template?.footer?.email}
                </p>
              )}
              {data?.template?.footer?.website && (
                <p className="text-xs text-gray-600">
                  {data?.template?.footer?.website}
                </p>
              )}
              {data?.template?.footer?.address && (
                <p className="text-xs text-gray-600">
                  {data?.template?.footer?.address}
                </p>
              )}
            </div>
          </div>
        </div>
        <Button
          onClick={() => handlePrint2()}
          size="sm"
          className="ml-16 print:hidden rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default LetterHead;
