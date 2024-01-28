import TemplateCard from "@/components/templates/TemplateCard";
import TemplateCard1 from "@/components/templates/template1/Template1Card";
import { templates } from "@/lib/datas/templates";
import React from "react";

const TemplatesPage = () => {
  return (
    <div className="container mt-[50px] pb-20">
      <h1 className="text-[#33389d] text-3xl font-semibold leading-[22px] text-center">
        All Templates
      </h1>

      <div className="grid grid-cols-6 gap-8 mt-16">
        {templates.map((tmp, index) => (
          <TemplateCard key={index} template={tmp} />
        ))}
        {templates.map((tmp, index) => (
          <TemplateCard key={index} template={tmp} />
        ))}
        {templates.map((tmp, index) => (
          <TemplateCard key={index} template={tmp} />
        ))}
        {templates.map((tmp, index) => (
          <TemplateCard key={index} template={tmp} />
        ))}
        {templates.map((tmp, index) => (
          <TemplateCard key={index} template={tmp} />
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
