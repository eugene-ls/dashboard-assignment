import React from "react";
import { FaCheck } from "react-icons/fa";

interface StepProps {
  label: string;
  completed?: boolean;
  last?: boolean;
}

export function AccountStatusStep({ label, completed, last }: StepProps) {
  return (
    <div className="flex flex-col items-center relative">
      <div className="flex items-center">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
            completed ? "border-green-400" : "border-[#44485c]"
          } bg-[#23263A]`}
        >
          <FaCheck className={completed ? "text-green-400" : "text-[#44485c]"} />
        </div>
        {!last && (
          <div
            className={`w-20 h-px border-dashed border-t-2 mx-2 ${
              completed ? "border-green-400" : "border-[#44485c]"
            }`}
          ></div>
        )}
      </div>
      <div className="mt-3 w-24 text-center text-white text-lg font-normal">
        {label}
      </div>
    </div>
  );
}