import React from "react";
import TemplateCard from "./TemplateCard";
import { templates } from "@/lib/datas/templates";

const AllTemplates = () => {
  return (
    <div className="container mt-[50px] pb-20">
      <h1 className="text-[#33389d] text-3xl font-semibold leading-[22px] text-center">
        All Templates
      </h1>

      <div className="grid grid-cols-6 gap-8 mt-16">
        {templates.map((tmp, index) => (
          <TemplateCard key={index} template={tmp} />
        ))}
      </div>
    </div>
  );
};

export default AllTemplates;
