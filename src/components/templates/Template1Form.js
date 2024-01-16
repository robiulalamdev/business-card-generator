/* eslint-disable @next/next/no-img-element */
import useInputPattern from "@/lib/hooks/useInputPattern";
import { iUpload } from "@/lib/icons/icons";
import { Button, Dialog } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { SpinnerCircularFixed } from "spinners-react";
import TemplateCard1 from "./template1/TemplateCard1";

const Template1Form = () => {
  const { handlePhoneNumberInput } = useInputPattern();
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    watch,
    control,
    formState: { errors },
  } = useForm();

  // stats
  const [cardData, setCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [logo, setLogo] = useState(null);

  // refs
  const logoRef = useRef();

  const handleGenerate = (data) => {
    if (!logo) {
      logoRef.current.focus();
      return;
    }
    setIsLoading(true);
    setCardData({ ...data, logo: logo });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
              className="text-xs sm:text-sm md:text-base font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Logo
            </label>
            <Button
              onClick={() => logoRef.current.click()}
              className={`w-full h-[250px] rounded shadow-none border-2 hover:shadow-none bg-primary_gw flex flex-col justify-center gap-4 items-center`}
            >
              {logo ? (
                <img
                  className="w-full h-full object-contain"
                  src={URL.createObjectURL(logo)}
                  alt=""
                />
              ) : (
                <>
                  <div className="max-w-[100px] text-primary">{iUpload}</div>
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
              {...register("company_name", { required: true })}
              type="text"
              required
              placeholder="Enter Company Name"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>

          <div className="col-span-1">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Author
            </label>
            <input
              {...register("author", { required: true })}
              type="text"
              required
              placeholder="Enter Author Name"
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
              Phone 1
            </label>
            <input
              {...register("phone_primary", { required: true })}
              type="text"
              onInput={handlePhoneNumberInput}
              required
              placeholder="Enter Phone Number"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Phone 2
            </label>
            <input
              {...register("phone_secondary", { required: true })}
              type="text"
              onInput={handlePhoneNumberInput}
              required
              placeholder="Enter Phone Number"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Email 1
            </label>
            <input
              {...register("email_primary", { required: true })}
              type="email"
              required
              placeholder="Enter Email"
              className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
              htmlFor=""
            >
              Email 2
            </label>
            <input
              {...register("email_secondary", { required: true })}
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
      <Dialog
        size="xs"
        open={!isLoading && cardData}
        handler={() => setCardData(null)}
        className="bg-white flex justify-center items-center py-5"
      >
        <TemplateCard1 cardData={cardData} />
      </Dialog>
    </>
  );
};

export default Template1Form;
