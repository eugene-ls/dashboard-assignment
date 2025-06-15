import React, { useState } from "react";

const items = [
  "Winnability",
  "Exposure Review & Suggested Coverage",
  "Portfolio Strategy Alignment",
  "Broker Analytics",
];

export default function DecisionSupportPanel() {
  const [active, setActive] = useState("Winnability");

  return (
    <div className="bg-[#23263A] rounded-2xl mt-28 p-6 min-w-[260px] flex flex-col shadow">
      <div className="text-white text-base font-semibold mb-6 flex items-center justify-between">
        <span>DECISION SUPPORT</span>
        <span className="bg-[#23263A] border border-[#44485c] rounded-full px-2 py-0.5 text-xs ml-2">4</span>
      </div>
      <div className="flex flex-col gap-3 text-base font-semibold">
        {items.map((item) => (
          <span
            key={item}
            className={`cursor-pointer transition-colors ${
              active === item ? "text-sky-400" : "text-white"
            } hover:text-sky-400`}
            onClick={() => setActive(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}