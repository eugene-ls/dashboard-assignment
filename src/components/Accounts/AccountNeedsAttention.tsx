import React from "react";

export default function AccountNeedsAttention() {
  return (
    <div className="border border-yellow-400 rounded-xl px-8 py-5 bg-[#23263A] w-full max-w-[900px]">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-yellow-300 text-xl">⚠️</span>
        <span className="text-yellow-300 font-medium text-2xl">Needs Attention</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
        <div className="flex-1 min-w-[220px]">
          <div className="font-medium text-white text-lg">Marine Survey Required</div>
          <div className="text-sm text-[#A0A3C2] mb-1">Scheduled for 06/12/2025</div>
          <a href="#" className="text-blue-400 text-sm hover:underline">Review details link →</a>
        </div>
        <div className="flex-1 min-w-[220px]">
          <div className="font-medium text-white text-lg">Loss Control Complete</div>
          <div className="text-sm text-[#A0A3C2] mb-1">Last inspection: 02/15/2025</div>
          <a href="#" className="text-blue-400 text-sm hover:underline">View report →</a>
        </div>
        <div className="flex-1 min-w-[220px]">
          <div className="font-medium text-white text-lg">Claims Review Required</div>
          <div className="text-sm text-[#A0A3C2] mb-1">3 open claims  //  $245,000 TTL</div>
          <a href="#" className="text-blue-400 text-sm hover:underline">View claims →</a>
        </div>
      </div>
    </div>
  );
}