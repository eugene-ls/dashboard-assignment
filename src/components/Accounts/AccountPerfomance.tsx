import React from "react";

export default function AccountPerformance() {
  return (
    <div className="mt-12">
      <div className="text-2xl font-semibold text-white mb-6">Performance Metrics</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-[#23263A] rounded-xl p-8 flex flex-col">
          <div className="text-[#A0A3C2] mb-2">Winnability</div>
          <div className="text-3xl text-white font-light mb-2">Very Strong</div>
          <a href="#" className="text-blue-400 text-xs hover:underline">See all factors →</a>
        </div>
        <div className="bg-[#23263A] rounded-xl p-8 flex flex-col">
          <div className="text-[#A0A3C2] mb-2">Loss Ratio</div>
          <div className="text-3xl text-white font-light mb-2">25%</div>
          <div className="text-[#A0A3C2] text-xs mb-2">vs 42% target</div>
          <a href="#" className="text-blue-400 text-xs hover:underline">View history →</a>
        </div>
        <div className="bg-[#23263A] rounded-xl p-8 flex flex-col">
          <div className="text-[#A0A3C2] mb-2">Premium Growth</div>
          <div className="text-3xl text-white font-light mb-2">12.4%</div>
          <div className="text-[#A0A3C2] text-xs mb-2">YoY increase<br />$123M vs $150M Target</div>
          <a href="#" className="text-blue-400 text-xs hover:underline">View trend →</a>
        </div>
        <div className="bg-[#23263A] rounded-xl p-8 flex flex-col">
          <div className="text-[#A0A3C2] mb-2">Exposure Distribution</div>
          <div className="mb-2">
            <div className="flex justify-between text-xs text-[#A0A3C2]">
              <span>Marine Cargo</span><span>71.4%</span>
            </div>
            <div className="w-full h-2 bg-[#181B2A] rounded-full mb-2">
              <div className="h-2 bg-blue-500 rounded-full" style={{ width: "71.4%" }} />
            </div>
            <div className="flex justify-between text-xs text-[#A0A3C2]">
              <span>General Liability</span><span>20%</span>
            </div>
            <div className="w-full h-2 bg-[#181B2A] rounded-full mb-2">
              <div className="h-2 bg-blue-500/60 rounded-full" style={{ width: "20%" }} />
            </div>
            <div className="flex justify-between text-xs text-[#A0A3C2]">
              <span>Workers Comp</span><span>8.6%</span>
            </div>
            <div className="w-full h-2 bg-[#181B2A] rounded-full">
              <div className="h-2 bg-blue-500/30 rounded-full" style={{ width: "8.6%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}