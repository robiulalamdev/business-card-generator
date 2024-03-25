import { Button, Step, Stepper, Typography } from "@material-tailwind/react";
import React from "react";

const tabs = [
  { id: 1, name: "Template" },
  { id: 2, name: "Banner" },
  { id: 3, name: "Letter Head" },
];

const FormStepper = ({ stepId, setStepId }) => {
  const handleStep = async (id) => {
    if (stepId > id && stepId !== 1) {
      setStepId(stepId - id);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center gap-1 md:gap-2">
        {tabs.map((tab, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            )}
            <Button
              onClick={() => handleStep(tab.id)}
              className={`w-[70px] sm:w-[100px] text-[10px] md:text-xs normal-case font-normal p-0 h-[30px] rounded-full shadow-none hover:shadow-none ml-1 md:ml-2 ${
                stepId >= tab.id
                  ? "bg-BPM"
                  : "bg-white border text-black cursor-none"
              } `}
            >
              {tab.name}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FormStepper;
