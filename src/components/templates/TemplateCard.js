/* eslint-disable @next/next/no-img-element */
import { clickSound } from "@/lib/globalServices";
import { setSelectedTmp } from "@/redux/features/globals/globalsSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const TemplateCard = ({ template }) => {
  const dispatch = useDispatch();

  const handleGetData = () => {
    clickSound();
    dispatch(setSelectedTmp(template));
  };
  return (
    <div
      className="w-full h-full cursor-pointer hover:border hover:border-primary bg-white overflow-hidden"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <Image
        onClick={() => handleGetData()}
        className="w-full border h-full object-contain hover:scale-150 duration-700"
        src={template.img}
        alt=""
      />
    </div>
  );
};

export default TemplateCard;
