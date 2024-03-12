import {
  setGenerateStep,
  setOpenChooseTempModal,
  setOpenTempForm,
  setSelectedTmp,
} from "@/redux/features/globals/globalsSlice";
import { Button, Dialog } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import TemplateCard from "../templates/TemplateCard";
import { templates } from "@/lib/datas/templates";
import Image from "next/image";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const TemplateReview = ({}) => {
  const { selectedTmp, openChooseTempModal, openTempForm } = useSelector(
    (state) => state.global
  );

  const [preview, setPreview] = useState("");

  const dispatch = useDispatch();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleGetData = (template) => {
    dispatch(setSelectedTmp(template));
    dispatch(setOpenTempForm(true));
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-between gap-4 bg-white max-w-[800px] h-fit w-full py-[12px] px-[8px]
        border rounded-md
      
      "
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <TransformWrapper initialScale={1} initialPositionX={200}>
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              height: "350px",
            }}
          >
            <div ref={componentRef} className="w-full h-full">
              {selectedTmp?.template}
            </div>
          </TransformComponent>
        </TransformWrapper>
        <div className="flex items-center gap-2 font-open-sans normal-case mb-[80px]">
          <Button
            onClick={() => {
              dispatch(setOpenChooseTempModal(true));
            }}
            size="sm"
            className="normal-case font-open-sans font-normal rounded-sm shadow-none hover:shadow-none h-8 bg-deep-purple-600 text-xs text-current text-white"
          >
            Change Template
          </Button>
          <Button
            onClick={() => {
              dispatch(setOpenChooseTempModal(true));
              dispatch(setOpenTempForm(true));
            }}
            size="sm"
            className="normal-case font-open-sans font-normal rounded-sm shadow-none hover:shadow-none h-8 bg-gray-50 text-xs text-current text-blue-gray-800 border"
          >
            Update
          </Button>
          <Button
            onClick={() => handlePrint()}
            size="sm"
            className="normal-case font-open-sans font-normal rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
          >
            Download
          </Button>
        </div>
      </div>

      <Dialog
        open={openChooseTempModal}
        handler={() => {
          dispatch(setOpenChooseTempModal(false));
          dispatch(setOpenTempForm(false));
        }}
        size="xl"
        className="h-full p-4 overflow-y-auto max-h-full"
      >
        {openChooseTempModal && !openTempForm && (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
              {templates.map((tmp, index) => (
                <div
                  key={index}
                  className={`w-full h-full cursor-pointer hover:border hover:border-primary bg-white overflow-hidden group relative ${
                    selectedTmp?._id === tmp?._id &&
                    "border-[4px] border-primary"
                  }`}
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
                        group-hover:flex justify-center items-center gap-3
                        "
                  >
                    <Button
                      onClick={() => setPreview(tmp?.img)}
                      className="w-[100px] h-8 rounded-sm bg-primary p-0"
                    >
                      Preview
                    </Button>
                    <Button
                      onClick={() => handleGetData(tmp)}
                      className="w-[100px] h-8 rounded-sm bg-green-600 p-0"
                    >
                      Select
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {openChooseTempModal && openTempForm && (
          <div className="my-4 w-full mx-auto">
            {selectedTmp && <>{selectedTmp?.tmp_form}</>}
          </div>
        )}
      </Dialog>

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

export default TemplateReview;
