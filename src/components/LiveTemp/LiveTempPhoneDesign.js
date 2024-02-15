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
    <>
      <div
        id="print"
        className="flex justify-center items-center w-full h-fit max-w-[500px] mx-auto mt-8"
      >
        {template && template?.small_code}
      </div>
    </>
  );
};

export default LiveTempPhoneDesign;
