/* eslint-disable @next/next/no-img-element */
import { templates } from "@/lib/datas/templates";
import { setSelectedTmp } from "@/redux/features/globals/globalsSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const TemplateCard = ({ template }) => {
  const dispatch = useDispatch();

  const handleGetData = () => {
    dispatch(setSelectedTmp(template));
  };
  return (
    // <Link href={`/templates/${template?._id}`}>
    <div className="w-full h-full group hover:-translate-y-5 duration-300 cursor-pointer hover:border hover:border-primary">
      <Image
        onClick={() => handleGetData()}
        className="w-full border"
        src={template.img}
        alt=""
      />
    </div>
    // </Link>
  );
};

export default TemplateCard;
