/* eslint-disable @next/next/no-img-element */
import useInputPattern from "@/lib/hooks/useInputPattern";
import { iUpload } from "@/lib/icons/icons";
import { Button, Dialog } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { SpinnerCircularFixed } from "spinners-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGenerateStep,
  setHtml,
  setTemplateData,
} from "@/redux/features/globals/globalsSlice";

const Template2Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // stats
  const [isLoading, setIsLoading] = useState(false);
  const [logo, setLogo] = useState(null);

  // refs
  const logoRef = useRef();

  const convertImageToBase64 = async (imageFile) => {
    return new Promise((resolve, reject) => {
      if (!imageFile || !(imageFile instanceof File)) {
        reject("Invalid image file");
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        resolve(e.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(imageFile);
    });
  };

  const handleGenerate = async (data) => {
    if (!logo) {
      logoRef.current.focus();
      return;
    }
    setIsLoading(true);
    const url = await convertImageToBase64(logo);
    setTimeout(() => {
      dispatch(setTemplateData({ ...data, logo: url }));
      const html = `<div
  style="display: flex;align-items: start; width: 300px; height: fit-content; padding: 10px; background: ghostwhite;">
  <img style="width: 80px; height: 80px; border-radius: 50%;"
      src="${url}"
      alt="">
  <div style="border-left: 1px solid gray; padding: 0px 5px;">
      <h1 style="font-size: 16px;margin: 0px; font-family: Arial, Helvetica, sans-serif;">${data?.name}</h1>
      <p style="font-size: 12px;margin: 0px; font-family: Arial, Helvetica, sans-serif;">
      ${data?.designation}
      </p>
      <p style="padding-top: 5px; color: black;"><a href="#"
              style="font-size: 12px;text-decoration: none; font-family: Arial, Helvetica, sans-serif;color: black;">
              ${data?.address}
          </a></p>
      <div style="display: flex; align-items: center; gap: 10px;">
          <img style="width: 20px; height: 20px; border-radius: 50%;"
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="">
          <img style="width: 20px; height: 20px; border-radius: 50%;"
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="">
          <img style="width: 20px; height: 20px; border-radius: 50%;"
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="">
          <img style="width: 20px; height: 20px; border-radius: 50%;"
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="">
      </div>
  </div>
</div>`;
      dispatch(setHtml(html));
      dispatch(setGenerateStep(2));
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      <div className="max-w-[600px] h-fit min-h-[350px] border border-primary shadow mx-auto p-5">
        <form
          onSubmit={handleSubmit(handleGenerate)}
          className="grid grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Logo
            </label>
            <Button
              onClick={() => logoRef.current.click()}
              className={`w-full h-[160px] rounded shadow-none border-2 hover:shadow-none bg-primary_gw flex flex-col justify-center gap-4 items-center`}
            >
              {logo ? (
                <img
                  className="w-full h-full object-contain"
                  src={URL.createObjectURL(logo)}
                  alt=""
                />
              ) : (
                <>
                  <div className="max-w-[60px] text-primary">{iUpload}</div>
                  <h1 className="text-gray-500 text-sm font-normal !normal-case text-current">
                    Upload Logo Image <span>(.png, .jpg, jpeg)</span>
                  </h1>
                </>
              )}
              <input
                ref={logoRef}
                onChange={(e) => setLogo(e.target.files[0])}
                type="file"
                multiple={false}
                accept=".png, .jpg, .jpeg"
                className="opacity-0 hidden"
              />
            </Button>
          </div>
          <div className="col-span-2">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              required
              placeholder="Enter Name"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>

          <div className="col-span-1">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Designation
            </label>
            <input
              {...register("designation", { required: true })}
              type="text"
              required
              placeholder="Enter Designation"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>

          <div className="col-span-2">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Address
            </label>
            <input
              {...register("address", { required: true, maxLength: 30 })}
              type="text"
              required
              placeholder="Enter Address"
              maxLength={30}
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>
          <Button
            type="submit"
            className="flex justify-center items-center gap-2 max-w-[180px] w-full h-[48px] shadow-none hover:shadow-none rounded-sm bg-primary"
          >
            {isLoading && (
              <SpinnerCircularFixed
                size={30}
                thickness={150}
                speed={450}
                color="white"
                secondaryColor="gray"
              />
            )}
            Generate
          </Button>
        </form>
      </div>
      {/* <Dialog
        size="xs"
        open={!isLoading && cardData}
        handler={() => setCardData(null)}
        className="bg-white flex justify-center items-center py-5"
      >
        <TemplateCard1 cardData={cardData} />
      </Dialog> */}
    </>
  );
};

export default Template2Form;
