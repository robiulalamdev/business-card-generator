/* eslint-disable @next/next/no-img-element */
import { convertImageToBase64 } from "@/lib/globalServices";
import { setTempResult } from "@/redux/features/globals/globalsSlice";
import { useUpdateTempByIdMutation } from "@/redux/features/template/templateApi";
import { Button, Dialog } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const BannerReview = () => {
  const { tempResult } = useSelector((state) => state.global);
  const [updateTempById, { isLoading: updateLoading }] =
    useUpdateTempByIdMutation();

  const bannerImgRef = useRef();
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const printBanner = async () => {
    const element = document.getElementById("bannerContainer"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUpdateBanner = async (id) => {
    const banner = await convertImageToBase64(image);
    let { template, ...other } = tempResult;
    const options = {
      data: { template: { ...template, banner: banner } },
      id: tempResult?._id,
    };
    const result = await updateTempById(options);
    if (result?.data?.success) {
      dispatch(
        setTempResult({ ...other, template: { ...template, banner: banner } })
      );
      setImage(null);
      toast.success("Banner Change Success");
    } else {
      toast.error("Banner Change Failed");
    }
  };

  return (
    <>
      <div className="flex flex-col items-end gap-4 ">
        <div
          id="bannerContainer"
          className="min-w-[600px] max-w-[600px] min-h-[600px] max-h-[600px] rounded-md bg-orange-600 mx-auto shadow shadow-gray-300 overflow-hidden"
        >
          {tempResult?.template?.banner ? (
            <div className="relative min-w-[600px] min-h-[600px] max-h-[600px]">
              <img
                src={tempResult?.template?.banner}
                alt=""
                className="min-w-[600px] max-w-[600px] min-h-[600px] max-h-[600px] object-cover"
              />
              <div className="flex justify-center items-center absolute top-0 w-full h-full">
                <img
                  src={tempResult?.template?.logo}
                  alt=""
                  className="h-[80px] w-[80px] object-cover rounded-full"
                />
              </div>
            </div>
          ) : (
            <div className=" w-full h-full flex justify-center items-center">
              <h1 className="text-sm font-semibold text-gray-600">
                Banner Here
              </h1>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => bannerImgRef.current.click()}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8 bg-deep-purple-600 text-xs text-current text-white"
          >
            Update
          </Button>
          <Button
            onClick={() => printBanner()}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
          >
            Download
          </Button>
        </div>
      </div>

      <input
        ref={bannerImgRef}
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        accept=".png, .jpg, .jpeg"
        multiple={false}
        className="hidden"
      />

      <Dialog open={!!image} handler={() => setImage(null)}>
        {image && (
          <div className="max-w-[700px] flex justify-center items-center mx-auto">
            <img
              src={URL.createObjectURL(image) || null}
              alt=""
              className="w-full h-full object-contain mx-auto"
            />
          </div>
        )}

        <div className="flex items-center justify-end gap-2 m-2">
          <Button
            onClick={() => {
              setImage(null);
              bannerImgRef.current.value = null;
            }}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8 bg-red-600 text-xs text-current text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleUpdateBanner()}
            size="sm"
            className="rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
          >
            Submit
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default BannerReview;
