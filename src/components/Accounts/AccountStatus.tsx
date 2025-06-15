import React from "react";
import { AccountStatusStep } from "./AccountStatusStep";

export default function AccountStatus() {
  const steps = [
    { label: "Submitted", completed: true },
    { label: "Review", completed: true },
    { label: "Quote", completed: true },
    { label: "Bind", completed: true },
    { label: "Issue", completed: true },
    { label: "Renew", completed: false },
  ];

  return (
    <div className="bg-[#23263A] rounded-2xl p-8 mx-auto w-{">
      <div className="flex items-center relative w-full justify-between">
        {steps.map((step, idx) => (
          <div key={step.label} className="flex flex-col items-center flex-1 relative">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step.completed ? "border-green-400" : "border-[#44485c]"} bg-[#23263A]`}>
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="none" />
                  <path d="M4 8.5l2.5 2.5L12 6" stroke={step.completed ? "#22c55e" : "#44485c"} strokeWidth="2" fill="none" />
                </svg>
              </div>
              {idx < steps.length - 1 && (
                <div className={`w-20 h-px border-dashed border-t-2 mx-2 ${step.completed ? "border-green-400" : "border-[#44485c]"}`}></div>
              )}
            </div>
            <div className="mt-3 text-white text-base">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}