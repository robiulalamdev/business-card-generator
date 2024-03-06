import React from "react";
import TemplateCard from "./TemplateCard";
import { templates } from "@/lib/datas/templates";
import Banner from "../home/Banner";

const AllTemplates = () => {
  return (
    <>
      <Banner />
      <div className="container mt-[50px] pb-20">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[#33389d] text-xl md:text-[25px] font-semibold leading-[22px] text-center font-open-sans">
            Select the Best Email Template That Suits Your Business
          </h1>
          <p className="font-open-sans text-[15px] text-center mt-[5px] text-gray-600">
            Email template with instructions for usage ( at gmail, outlook etc),
            social media banners, and letterhead will be emailed to you once you
            select the template and update the information.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {templates.map((tmp, index) => (
            <TemplateCard key={index} template={tmp} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTemplates;
