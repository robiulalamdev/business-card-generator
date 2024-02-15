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
  setTempResult,
  setTemplateData,
} from "@/redux/features/globals/globalsSlice";
import FooterSocialInput from "@/components/commons/FooterSocialInput";
import BannerInput from "@/components/commons/BannerInput";
import { useCreateTemplateMutation } from "@/redux/features/template/templateApi";
import { toast } from "sonner";
import { temp1Html } from "@/lib/datas/generateHtml/temp1";

const Template1Form = () => {
  const { selectedTmp, generateStep, templateData } = useSelector(
    (state) => state.global
  );
  const { handlePhoneNumberInput, handleNumber } = useInputPattern();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [createTemplate] = useCreateTemplateMutation();

  const dispatch = useDispatch();

  // stats
  const [isLoading, setIsLoading] = useState(false);
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

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

  const handleSave = async () => {
    const options = {
      data: { template: templateData, template_no: 1 },
    };
    const result = await createTemplate(options);
    if (result?.data?.success) {
      toast.success("Business Card Save Success");
      dispatch(setTempResult(result?.data?.data));
      dispatch(setGenerateStep(2));
    } else {
      toast.error("Business Card Save Failed");
    }
    setIsLoading(false);
  };

  const handleGenerate = async (data) => {
    if (!logo) {
      logoRef.current.focus();
      return;
    }
    setIsLoading(true);
    const url = await convertImageToBase64(logo);
    let bannerUrl = "";
    if (banner) {
      bannerUrl = await convertImageToBase64(banner);
    }

    await dispatch(setTemplateData({ ...data, logo: url, banner: bannerUrl }));
    const html = await temp1Html({ ...data, logo: url });
    await dispatch(setHtml(html));
    handleSave();
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
          <div className="col-span-1">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Phone
            </label>
            <input
              {...register("phone", { required: true })}
              type="number"
              onInput={handleNumber}
              required
              placeholder="Enter Phone"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>

          <div className="col-span-2">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              required
              placeholder="Enter Email"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>
          <div className="col-span-2">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Website
            </label>
            <input
              {...register("website", { required: true })}
              type="url"
              required
              placeholder="Enter website Url"
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
              {...register("address", { required: true })}
              type="text"
              required
              placeholder="Enter Address"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>

          <div className="col-span-2">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Confidential
            </label>
            <textarea
              {...register("confidential", { required: true })}
              required
              placeholder="Enter Confidential"
              className="w-full h-[150px] outline-none border border-black p-2 rounded text-sm"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-2 col-span-2">
            <div className="">
              <label
                className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
                htmlFor=""
              >
                Facebook
              </label>
              <input
                {...register("facebook", { required: true })}
                type="url"
                required
                placeholder="Enter URL"
                className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
              />
            </div>

            <div className="">
              <label
                className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
                htmlFor=""
              >
                Instagram
              </label>
              <input
                {...register("instagram", { required: true })}
                type="url"
                required
                placeholder="Enter URL"
                className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
              />
            </div>
            <div className="">
              <label
                className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
                htmlFor=""
              >
                Pinterest
              </label>
              <input
                {...register("pinterest", { required: true })}
                type="url"
                required
                placeholder="Enter URL"
                className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Banner (Optional)
            </label>
            <div className="h-[200px] max-w-[600px] w-full">
              <BannerInput setFile={setBanner} file={banner} />
            </div>
          </div>

          <h1>Footer Information</h1>
          <FooterSocialInput
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
          />
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

export default Template1Form;
