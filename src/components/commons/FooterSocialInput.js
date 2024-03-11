import useInputPattern from "@/lib/hooks/useInputPattern";
import React from "react";

const FooterSocialInput = ({ register, setValue, watch, errors }) => {
  const { handleNumber } = useInputPattern();
  return (
    <div className="grid grid-cols-2 gap-[6px]">
      <div className="">
        <label
          className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
          htmlFor=""
        >
          Contact No
        </label>
        <input
          {...register("footer.contact_no", { required: false })}
          type="text"
          onInput={handleNumber}
          required={false}
          placeholder="Enter Contact No"
          className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
          htmlFor=""
        >
          Email
        </label>
        <input
          {...register("footer.email", { required: false })}
          type="email"
          required={false}
          placeholder="Enter Email"
          className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
          htmlFor=""
        >
          Website (optional)
        </label>
        <input
          {...register("footer.website", { required: false })}
          type="text"
          required={false}
          placeholder="Enter Website URL"
          className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
          htmlFor=""
        >
          Address (optional)
        </label>
        <input
          {...register("footer.address", { required: false })}
          type="text"
          required={false}
          placeholder="Enter Address"
          className="w-full h-[37px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary px-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600"
        />
      </div>
    </div>
  );
};

export default FooterSocialInput;
