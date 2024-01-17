/* eslint-disable react-hooks/exhaustive-deps */

import Template1Form from "@/components/templates/Template1Form";
import { templates } from "@/lib/datas/templates";
import { setSelectedTmp } from "@/redux/features/globals/globalsSlice";
import { Button } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";

const TemplateFormPage = () => {
  const { query } = useRouter();
  const { selectedTmp, generateStep } = useSelector((state) => state.global);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const handleGetData = () => {
    const template = templates.find((tmp) => tmp._id === parseInt(query.id));
    dispatch(setSelectedTmp(template));
    setIsLoading(false);
  };
  useMemo(() => {
    setIsLoading(true);
    handleGetData();
  }, [query?.id]);

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

  // console.log(selectedTmp);
  // toast('My first toast')
  return (
    <div className="container h-screen ">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <ScaleLoader color="#4A51D3" />
        </div>
      ) : (
        <div className="mt-8 min-h-[500px] max-w-[1200px] shadow border rounded-md mx-auto py-5 px-2">
          {selectedTmp && (
            <h1 className="text-center text-xl font-semibold uppercase mb-4">
              {selectedTmp?.name}
            </h1>
          )}
          {selectedTmp && generateStep === 1 && <>{selectedTmp?.tmp_form}</>}
          {selectedTmp && generateStep === 2 && (
            <>
              <div className="flex justify-center">
                <div id="print">{selectedTmp?.template}</div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  onClick={() => handleDownloadImage()}
                  size="sm"
                  className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-blue-700 to-primary
          hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500"
                >
                  Download
                </Button>
                <Button
                  className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-yellow-700 to-pink-500
          hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-700 transition-all ease-in duration-500"
                >
                  Generate Link
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TemplateFormPage;
