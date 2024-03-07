/* eslint-disable @next/next/no-img-element */
import { iUpload } from "@/lib/icons/icons";
import { Button } from "@material-tailwind/react";
import React, { useContext, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { SpinnerCircularFixed } from "spinners-react";
import { useDispatch, useSelector } from "react-redux";
import { setTemplateData } from "@/redux/features/globals/globalsSlice";
import BannerInput from "@/components/commons/BannerInput";
import FooterSocialInput from "@/components/commons/FooterSocialInput";
import { convertImageToBase64 } from "@/lib/globalServices";
import { AuthContext } from "@/components/context/AuthContext";
import FormStepper from "@/components/commons/FormStepper";
import LogoInput from "@/components/commons/LogoInput";
import useInputPattern from "@/lib/hooks/useInputPattern";

const Template5Form = () => {
  const { handleSave, saveIsLoading, setSaveIsLoading, handleSetHtmlCode } =
    useContext(AuthContext);

  const { tempResult } = useSelector((state) => state.global);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const { handlePhoneNumberInput } = useInputPattern();

  const dispatch = useDispatch();

  // stats
  const [stepId, setStepId] = useState(1);
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  // refs
  const logoRef = useRef();

  const handleGenerate = async (data) => {
    if (!logo) {
      return;
    }
    if (stepId < 3) {
      setStepId(stepId + 1);
      return;
    }
    if (stepId === 3) {
      setSaveIsLoading(true);
      const url = await convertImageToBase64(logo);
      let bannerUrl = "";
      if (banner) {
        bannerUrl = await convertImageToBase64(banner);
      }

      await dispatch(
        setTemplateData({ ...data, logo: url, banner: bannerUrl })
      );
      await handleSetHtmlCode({ ...data, logo: url }, 5);
      await handleSave(5);
      setLogo(null);
      setBanner(null);
    }
  };

  const handleValues = async () => {
    const { logo, banner, ...other } = tempResult?.template;
    if (logo) {
      setLogo(logo);
    }
    if (banner) {
      setBanner(banner);
    }
    for (const key in other) {
      const value = other[key];
      if (typeof value === "object") {
        for (const nkey in value) {
          const nvalue = value[nkey];
          setValue(`${key}.${nkey}`, nvalue);
        }
      } else {
        setValue(key, value);
      }
    }
  };

  useMemo(() => {
    if (tempResult) {
      handleValues();
    }
  }, [tempResult?.template]);
  return (
    <>
      <FormStepper stepId={stepId} setStepId={setStepId} />
      <div className="max-w-[600px] h-fit min-h-[350px] border border-primary shadow mx-auto p-5 mt-[20px]">
        <form
          onSubmit={handleSubmit(handleGenerate)}
          className="grid grid-cols-1 gap-4"
        >
          <div
            className={`grid grid-cols-2 gap-4 ${
              stepId === 1 ? "block" : "hidden"
            }`}
          >
            <div className="col-span-2">
              <LogoInput file={logo} setFile={setLogo} label="Logo" />
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
                type="text"
                onInput={handlePhoneNumberInput}
                required
                placeholder="+1-XXX-XXX-XXXX"
                className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
              />
            </div>

            <div className="col-span-2">
              <label
                className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
                htmlFor=""
              >
                Company Vision
              </label>
              <input
                {...register("company_vision", { required: false })}
                type="text"
                required={false}
                placeholder="Company Vision"
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
                type="text"
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
                  type="text"
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
                  type="text"
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
                  type="text"
                  required
                  placeholder="Enter URL"
                  className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
                />
              </div>
            </div>
          </div>

          <div className={`col-span-2 ${stepId === 2 ? "block" : "hidden"}`}>
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

          <div className={`col-span-2 ${stepId === 3 ? "block" : "hidden"}`}>
            <h1>Footer Information</h1>
            <FooterSocialInput
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
          </div>
          <Button
            type="submit"
            className="flex justify-center items-center gap-2 max-w-[180px] w-full h-[48px] shadow-none hover:shadow-none rounded-sm bg-primary"
          >
            {saveIsLoading && (
              <SpinnerCircularFixed
                size={30}
                thickness={150}
                speed={450}
                color="white"
                secondaryColor="gray"
              />
            )}
            {stepId === 3 ? "Generate" : "Next"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Template5Form;
