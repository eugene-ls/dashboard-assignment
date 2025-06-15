import React from "react";

export default function AccountNeedsAttention() {
  return (
    <div className="pl-0 ml-0">
  <div className="border border-yellow-400 rounded-xl px-6 py-5 bg-[#23263A] max-w-[650px]">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-yellow-300 text-xl">ⓘ</span>
      <span className="text-yellow-300 font-medium text-2xl">Needs Attention</span>
    </div>
    <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
      <div className="flex-1 min-w-[180px]">
        <div className="text-xs text-white font-semibold mb-1">Marine Survey Required</div>
        <div className="text-xs text-[#A0A3C2] mb-1">Scheduled for 06/12/2025</div>
        <a href="#" className="text-blue-400 text-xs hover:underline">Review details link →</a>
      </div>
      <div className="flex-1 min-w-[180px]">
        <div className="text-xs text-white font-semibold mb-1">Loss Control Complete</div>
        <div className="text-xs text-[#A0A3C2] mb-1">Last inspection: 02/15/2025</div>
        <a href="#" className="text-blue-400 text-xs hover:underline">View report →</a>
      </div>
      <div className="flex-1 min-w-[180px]">
        <div className="text-xs text-white font-semibold mb-1">Claims Review Required</div>
        <div className="text-xs text-[#A0A3C2] mb-1">3 open claims  //  $245,000 TTL</div>
        <a href="#" className="text-blue-400 text-xs hover:underline">View claims →</a>
      </div>
    </div>
  </div>
</div>
  );
}