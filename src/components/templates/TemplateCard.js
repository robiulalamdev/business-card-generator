/* eslint-disable @next/next/no-img-element */
import { clickSound } from "@/lib/globalServices";
import { setSelectedTmp } from "@/redux/features/globals/globalsSlice";
import { Button, Dialog } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TemplateCard = ({ template }) => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState("");

  const handleGetData = () => {
    clickSound();
    dispatch(setSelectedTmp(template));
  };
  return (
    <>
      <div
        className="w-full h-full cursor-pointer hover:border hover:border-primary bg-white overflow-hidden group relative"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        <Image
          className="w-full border h-full object-contain hover:scale-150 duration-700"
          src={template.img}
          alt=""
        />
        <div
          className="absolute top-0 w-full h-full hidden group-hover:inline-block bg-primary/10 backdrop-blur-[4px] group-hover:duration-200
              group-hover:flex justify-center items-center gap-3
              "
        >
          <Button
            onClick={() => setPreview(template?.img)}
            className="w-[100px] h-8 rounded-sm bg-primary p-0"
          >
            Preview
          </Button>
          <Button
            onClick={() => handleGetData()}
            className="w-[100px] h-8 rounded-sm bg-green-600 p-0"
          >
            Select
          </Button>
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

export default TemplateCard;
