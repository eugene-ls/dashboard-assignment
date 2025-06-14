import React from "react";
import Card from "../common/Card";

export default function PortfolioGoals() {
  return (
    <Card className="bg-[#23263A] rounded-2xl border border-white/20 p-8 shadow-lg w-[260px] h-[470px] flex flex-col justify-between -ml-16">
      <h2 className="text-2xl font-semibold mb-6 text-white">Portfolio goals</h2>
      {/* Portfolio Loss Ratio Target */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-[#A0A3C2] mb-1">
          <span className="text-[10px] text-[#A0A3C2] mb-2 block text-center" style={{marginTop: '-10px'}}>
            PORTFOLIO LOSS RATIO TARGET</span>
        </div>
        {/* TG and blue arrow above bar */}
        <div className="flex flex-col items-center mb-1" style={{ width: "100%" }}>
          <span className="text-[10px] text-[#A0A3C2] mb-0.5">TG:55%</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M8 10L0 0H16L8 10Z" fill="#38BDF8"/>
          </svg>
        </div>
        {/* Progress bar */}
        <div className="relative h-4 rounded-full bg-[#23263A] overflow-hidden mb-1 flex items-center">
          <div className="h-4 rounded-l-full bg-green-400 flex items-center justify-center" style={{ width: "48%" }}>
            <span className="text-xs font-semibold text-white ml-2">48.2%</span>
          </div>
          <div className="h-4 bg-yellow-400" style={{ width: "24%" }}></div>
          <div className="h-4 rounded-r-full bg-red-500" style={{ width: "28%" }}></div>
        </div>
        {/* Green arrow under indicator */}
        <div className="flex" style={{ width: "95%" }}>
          <svg className="mx-auto" width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M8 0L0 10H16L8 0Z" fill="#22C55E"/>
          </svg>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-green-400 font-semibold"></span>
          <span className="text-[#A0A3C2]">100%</span>
        </div>
        <div className="text-green-400 text-[10px] -mt-4 ml-16">-6.8% (GOOD)</div>
      </div>
      {/* Renewal Retention */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-[#A0A3C2] mb-1">
          <span className="text-[10px] text-[#A0A3C2] mb-2 block text-center" style={{marginTop: '-16px'}}>
            RENEWAL RETENTION</span>
            <div className="w-full text-left">
          <span className="block text-[10px] text-[#A0A3C2] text-left ml-7 mt-">TG:85-90%</span>
        </div>
        </div>
        {/* Progress bar */}
        <div className="relative h-4 rounded-full bg-[#23263A] overflow-hidden mb-1 flex items-center">
          <div className="h-4 rounded-l-full bg-red-600" style={{ width: "16%" }}></div>
          <div className="h-4 bg-yellow-300" style={{ width: "37%" }}></div>
          <div className="h-4 bg-green-500 flex items-center justify-center" style={{ width: "14%" }}>
            <span className="text-xs font-semibold text-white">88%</span>
          </div>
          <div className="h-4 rounded-r-full bg-yellow-300" style={{ width: "33%" }}></div>
        </div>
        {/* Green arrow under green segment */}
        <div className="flex" style={{ width: "67%", marginLeft: "26%" }}>
          <svg className="mx-auto" width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M8 0L0 10H16L8 0Z" fill="#22C55E"/>
          </svg>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-yellow-400 font-semibold">88%</span>
          <span className="text-[#A0A3C2]">100%</span>
        </div>
        <div className="text-green-400 text-[10px] text-center ml-9 -mt-2">ON TARGET</div>
      </div>
      {/* New Business Target */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-[#A0A3C2] mb-1">
          <span>NEW BUSINESS TARGET</span>
          <span className="font-semibold">$12M</span>
        </div>
        <div className="relative h-3 rounded-full bg-[#181C2F] overflow-hidden mb-1">
          <div className="absolute left-0 top-0 h-3 rounded-l-full bg-blue-500" style={{ width: "67%" }}></div>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-blue-400 font-semibold">$8.1M</span>
          <span className="text-[#A0A3C2]">67%</span>
        </div>
      </div>
      {/* Annual GWP Target */}
      <div>
        <div className="flex justify-between text-xs text-[#A0A3C2] mb-1">
          <span>ANNUAL GWP TARGET</span>
          <span className="font-semibold">$42M</span>
        </div>
        <div className="relative h-3 rounded-full bg-[#181C2F] overflow-hidden mb-1">
          <div className="absolute left-0 top-0 h-3 rounded-l-full bg-blue-500" style={{ width: "68%" }}></div>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-blue-400 font-semibold">$28.4M</span>
          <span className="text-[#A0A3C2]">68%</span>
        </div>
      </div>
    </Card>
  );
}