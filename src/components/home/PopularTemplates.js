/* eslint-disable @next/next/no-img-element */
import { templates } from "@/lib/datas/templates";
import React from "react";
import TemplateCard from "../templates/TemplateCard";

const PopularTemplates = () => {
  return (
    <>
      <div className="container mt-[50px] pb-20">
        <h1 className="text-[#33389d] text-3xl font-semibold leading-[22px] text-center">
          Popular Templates
        </h1>

        <div className="grid grid-cols-6 gap-8 mt-16">
          {templates.map((tmp, index) => (
            <TemplateCard key={index} template={tmp} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularTemplates;
