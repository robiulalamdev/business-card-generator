import { Button } from "@material-tailwind/react";
import React from "react";
import { SpinnerCircularFixed } from "spinners-react";
import FooterSocialInput from "../commons/FooterSocialInput";
import LetterHeadBgInput from "../commons/LetterHeadBgInput";
import BannerInput from "../commons/BannerInput";
import ConfidentialInput from "../commons/ConfidentialInput";
import LogoInput from "../commons/LogoInput";
import FormStepper from "../commons/FormStepper";
import useInputPattern from "@/lib/hooks/useInputPattern";

const TemplateFormContainer = ({
  register,
  handleSubmit,
  handleGenerate,
  setValue,
  watch,
  control,
  errors,
  saveIsLoading,
  stepId,
  setStepId,
  logo,
  setLogo,
  setBanner,
  banner,
  setLhBg,
  lhBg,
  setSignature,
  signature,

  // input permit
  company_vision = false,
  signatureInput = false,
  socialInput = true,
  addressInput = true,
  confidentialInput = true,
}) => {
  const { handlePhoneNumberInput } = useInputPattern();
  return (
    <>
      <div
        className="md:bg-gray-50 rounded-md md:py-4 md:px-8 max-w-[1000px] w-full mx-auto !shadow-none"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <FormStepper stepId={stepId} setStepId={setStepId} />
        <form
          onSubmit={handleSubmit(handleGenerate)}
          className="h-fit mt-[15px] rounded border border-BPM p-4 md:p-8 shadow bg-white"
        >
          <div
            className={`grid md:grid-cols-2 gap-6 ${
              stepId === 1 ? "block" : "hidden"
            }`}
          >
            <div className="grid grid-cols-1 gap-[8px] col-span-1 h-fit">
              {signatureInput && (
                <div className="col-span-2">
                  <LogoInput
                    file={signature}
                    setFile={setSignature}
                    label="Signature"
                  />
                </div>
              )}
              <div className="col-span-2">
                <LogoInput file={logo} setFile={setLogo} label="Logo" />
              </div>

              <div className="col-span-2">
                <label
                  className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                  htmlFor=""
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  required
                  placeholder="Enter Name"
                  className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                />
              </div>

              <div className="col-span-1">
                <label
                  className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                  htmlFor=""
                >
                  Designation
                </label>
                <input
                  {...register("designation", { required: true })}
                  type="text"
                  required
                  placeholder="Enter Designation"
                  className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                />
              </div>

              <div className="col-span-1">
                <label
                  className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
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
                  className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                />
              </div>

              {company_vision && (
                <div className="col-span-2">
                  <label
                    className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                    htmlFor=""
                  >
                    Company Vision
                  </label>
                  <input
                    {...register("company_vision", { required: false })}
                    type="text"
                    required={false}
                    placeholder="Company Vision"
                    className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                  />
                </div>
              )}

              <div className="col-span-2">
                <label
                  className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  required
                  placeholder="Enter Email"
                  className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                />
              </div>

              <div className="col-span-2">
                <label
                  className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                  htmlFor=""
                >
                  Website
                </label>
                <input
                  {...register("website", { required: true })}
                  type="text"
                  required
                  placeholder="Enter website Url"
                  className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                />
              </div>
              {addressInput && (
                <div className="col-span-2">
                  <label
                    className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                    htmlFor=""
                  >
                    Address
                  </label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    required
                    placeholder="Enter Address"
                    className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-[8px] col-span-1 h-fit">
              {confidentialInput && (
                <ConfidentialInput
                  register={register}
                  watch={watch}
                  setValue={setValue}
                />
              )}

              {socialInput && (
                <>
                  <div className="col-span-2">
                    <label
                      className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                      htmlFor=""
                    >
                      Facebook
                    </label>
                    <input
                      {...register("facebook", { required: true })}
                      type="text"
                      required
                      placeholder="Enter URL"
                      className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                      htmlFor=""
                    >
                      Instagram
                    </label>
                    <input
                      {...register("instagram", { required: true })}
                      type="text"
                      required
                      placeholder="Enter URL"
                      className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                      htmlFor=""
                    >
                      Pinterest
                    </label>
                    <input
                      {...register("pinterest", { required: true })}
                      type="text"
                      required
                      placeholder="Enter URL"
                      className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={`col-span-1 ${stepId === 2 ? "block" : "hidden"}`}>
            <h1 className="font-bold font-open-sans text-center text-primary mb-2">
              ADDITIONAL INFORMATION
            </h1>
            <div>
              <label
                className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                htmlFor=""
              >
                Banner (Optional)
              </label>
              <div className="h-[200px] max-w-[600px] w-full">
                <BannerInput setFile={setBanner} file={banner} />
              </div>
            </div>
            <div className="mt-2">
              <label
                className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
                htmlFor=""
              >
                Letter Head Background (Optional)
              </label>
              <div className="h-[200px] max-w-[600px] w-full">
                <LetterHeadBgInput setFile={setLhBg} file={lhBg} />
              </div>
            </div>
          </div>

          <div className={` ${stepId === 3 ? "block" : "hidden"}`}>
            <h1 className="font-bold font-open-sans text-center text-primary mb-2">
              Footer Information
            </h1>
            <FooterSocialInput
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
          </div>

          <Button
            type="submit"
            className="flex justify-center items-center gap-2 max-w-[120px] w-full h-[40px] shadow-none hover:shadow-none rounded bg-primary mt-3"
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

export default TemplateFormContainer;
