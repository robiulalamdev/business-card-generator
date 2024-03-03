/* eslint-disable @next/next/no-img-element */
import { iUpload } from "@/lib/icons/icons";
import { Button } from "@material-tailwind/react";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { SpinnerCircularFixed } from "spinners-react";
import { useDispatch } from "react-redux";
import { setTemplateData } from "@/redux/features/globals/globalsSlice";
import BannerInput from "@/components/commons/BannerInput";
import FooterSocialInput from "@/components/commons/FooterSocialInput";
import { convertImageToBase64 } from "@/lib/globalServices";
import { AuthContext } from "@/components/context/AuthContext";

const Template4Form = () => {
  const { handleSave, saveIsLoading, setSaveIsLoading, handleSetHtmlCode } =
    useContext(AuthContext);
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // stats
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  // refs
  const logoRef = useRef();

  const handleGenerate = async (data) => {
    if (!logo) {
      logoRef.current.focus();
      return;
    }

    setSaveIsLoading(true);
    const url = await convertImageToBase64(logo);
    let bannerUrl = "";
    if (banner) {
      bannerUrl = await convertImageToBase64(banner);
    }

    await dispatch(
      setTemplateData({
        ...data,
        logo: url,
        banner: bannerUrl,
      })
    );

    await handleSetHtmlCode(
      {
        ...data,
        logo: url,
      },
      4
    );
    handleSave(4);
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
              Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              required
              placeholder="Enter title"
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
            {saveIsLoading && (
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
    </>
  );
};

export default Template4Form;
