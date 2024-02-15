/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { templates } from "@/lib/datas/templates";
import { setLiveTempData } from "@/redux/features/globals/globalsSlice";
import { Button } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const LiveTempPhoneDesign = ({ data }) => {
  const [template, setTemplate] = useState(null);
  const dispatch = useDispatch();

  const handleGetData = () => {
    const template = templates.find(
      (tmp) => tmp._id === parseInt(data?.template_no)
    );
    dispatch(setLiveTempData(data));
    setTemplate(template);
  };

  useEffect(() => {
    handleGetData();
  }, [data]);

  const handleDownloadImage = async () => {
    const element = document.getElementById("print"),
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
    <div className="grid md:grid-cols-4 items-start">
      <div className="flex flex-col items-end justify-end w-full px-4">
        <h1 className="font-semibold">Template</h1>
        <Button
          onClick={() => handleDownloadImage()}
          size="sm"
          className="rounded-sm shadow-none hover:shadow-none h-8  bg-gradient-to-r from-blue-700 to-primary
  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
        >
          Download
        </Button>
      </div>
      <div
        id="print"
        className="flex justify-center items-center w-full h-fit border-x border-t border-black p-4 col-span-2"
      >
        {template && template?.small_code}
      </div>
    </div>
  );
};

export default LiveTempPhoneDesign;
