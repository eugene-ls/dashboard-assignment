import React, { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function AnimatedApplyButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`bg-green-400 text-[#23263A] font-semibold rounded-full px-8 py-2 ml-8 transition 
        hover:bg-green-300 flex items-center justify-center gap-2
        ${clicked ? "scale-95 bg-green-600" : ""}
      `}
      style={{ transition: "transform 0.15s, background 0.15s" }}
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 1200);
      }}
      disabled={clicked}
    >
      {clicked ? (
        <>
          <FaCheck className="text-white text-lg animate-bounce" />
          <span className="text-white">Applied</span>
        </>
      ) : (
        "Apply"
      )}
    </button>
  );
}

export default function AIRecommendations() {
  return (
    <div className="bg-[#23263A] rounded-xl p-6 mt-2">
      <div className="flex items-center gap-2 text-green-400 mb-2">
        <FaMagic />
        <span className="font-semibold">AI-Powered Recommendations</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white font-semibold mb-1">
              Offer 5% premium discount in exchange for 3-year commitment
            </div>
            <div className="text-[#b3b8d0] text-sm">
              Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.
            </div>
          </div>
          <AnimatedApplyButton />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white font-semibold mb-1">
              Propose risk control services for cargo handling procedures
            </div>
            <div className="text-[#b3b8d0] text-sm">
              Can potentially reduce loss ratio by 15-20% based on similar maritime accounts in your portfolio. Specific focus on loading/unloading operations would address the most frequent claim scenarios.
            </div>
          </div>
          <AnimatedApplyButton />
        </div>
      </div>
    </div>
  );
}