/* eslint-disable @next/next/no-img-element */
import { templates } from "@/lib/datas/templates";
import React, { useState } from "react";
import TemplateCard from "../templates/TemplateCard";
import Image from "next/image";
import { Button, Dialog } from "@material-tailwind/react";

const PopularTemplates = () => {
  const [preview, setPreview] = useState("");
  return (
    <>
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
            <div
              key={index}
              className="w-full h-full cursor-pointer hover:border hover:border-primary bg-white overflow-hidden group relative"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <Image
                className="w-full border h-full object-contain hover:scale-150 duration-700"
                src={tmp.img}
                alt=""
              />
              <div
                className="absolute top-0 w-full h-full hidden group-hover:inline-block bg-primary/10 backdrop-blur-[4px] group-hover:duration-200
              group-hover:flex justify-center items-center
              "
              >
                <Button
                  onClick={() => setPreview(tmp?.img)}
                  className="w-[100px] h-8 rounded-sm bg-primary p-0"
                >
                  Preview
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!preview} handler={() => setPreview("")} size="xl">
        <div className="flex justify-center items-center bg-white p-4 relative">
          <Image
            className="w-full border h-full object-contain"
            src={preview}
            alt=""
          />
          <div className="absolute -top-2 -right-2">
            <Button
              onClick={() => setPreview("")}
              className="w-8 h-8 bg-red-600 hover:bg-red-700 p-0 rounded-full"
            >
              X
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PopularTemplates;
