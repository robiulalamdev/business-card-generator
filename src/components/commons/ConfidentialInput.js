import { iCheck, iTick } from "@/lib/icons/icons";
import React, { useEffect, useState } from "react";
const items = [
  "Intended for the recipient(s) only. if received in error, notify the sender, and delete immediately. Views expressed are the author's; the company is not liable for email viruses, security, or content errors. Verify with hard copy if necessary.",
  "Intended for the recipient(s) only; if received in error, notify the sender, and delete immediately. Views expressed are the author's; the company is not liable for email viruses, security, or content errors. Verify with hard copy if necessary.",
];

const ConfidentialInput = ({ register, watch, setValue }) => {
  const [open, setOpen] = useState(false);
  const value = watch("confidential");

  const handleText = () => {
    if (!open) {
      setOpen(true);
      setValue("confidential", "");
    }
  };

  useEffect(() => {
    if (items[0] !== value && items[1] !== value) {
      setOpen(true);
    } else if (items[0] === value || items[1] === value) {
      setOpen(false);
    }
  }, [value]);
  return (
    <div className="col-span-2 h-fit duration-1000">
      <label
        className="text-xs sm:text-[12px] font-semibold text-black font-open-sans mb-1 block"
        htmlFor=""
      >
        Confidential
      </label>
      <div className="grid grid-cols-1 gap-2">
        {items.map((item, index) => (
          <div
            onClick={() => {
              setValue("confidential", item);
              setOpen(false);
            }}
            key={index}
            className={`flex items-center max-w-full h-fit rounded-md shadow cursor-pointer ${
              value === item ? "bg-primary text-white" : ""
            }`}
          >
            <div
              className={`min-w-[50px] max-w-[50px] flex justify-center items-center min-h-12`}
            >
              {value === item ? iTick : iCheck}
            </div>
            <p
              className={`flex-grow text-[12px] pr-[6px] py-[8px] font-open-sans  ${
                value === item ? "text-[#fff]" : "text-gray-600"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
        <div
          onClick={() => handleText()}
          className={`flex items-center max-w-full h-fit rounded-md shadow cursor-pointer ${
            open ? "bg-primary text-white" : ""
          }`}
        >
          <div
            className={`min-w-[50px] max-w-[50px] flex justify-center items-center min-h-12`}
          >
            {open ? iTick : iCheck}
          </div>
          <p
            className={`flex-grow text-[12px] pr-[6px] py-[8px] font-open-sans  ${
              open ? "text-[#fff]" : "text-gray-600"
            }`}
          >
            Custom
          </p>
        </div>
      </div>
      <div className={`mt-2 ${open ? "block" : "hidden"}`}>
        <textarea
          {...register("confidential", { required: true })}
          required
          placeholder="Enter Confidential"
          className={`w-full h-[110px] bg-gray-50 focus:bg-BPM/5 outline-none border border-gray-500 focus:border-primary p-[6px] rounded text-[12px] font-open-sans placeholder:font-open-sans placeholder:text-[12px] text-black placeholder:text-gray-600 resize-none`}
        ></textarea>
      </div>
    </div>
  );
};

export default ConfidentialInput;
