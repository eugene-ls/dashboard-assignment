import React from "react";
import Card from "../common/Card";

export default function PortfolioGoals() {
  return (
    <Card className="bg-[#23263A] rounded-2xl border border-white/20 p-8 shadow-lg w-[260px] h-[470px] flex flex-col justify-between -ml-16">
      <h2 className="text-2xl font-semibold mb-6 text-white">Portfolio goals</h2>
      {/* Portfolio Loss Ratio Target */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-[#A0A3C2] mb-1">
          <span>PORTFOLIO LOSS RATIO TARGET</span>
          <span className="font-semibold">TG: 55%</span>
        </div>
        <div className="relative h-4 rounded-full bg-[#23263A] overflow-hidden mb-1">
          <div className="absolute left-0 top-0 h-4 rounded-l-full bg-green-400" style={{ width: "48%" }}></div>
          <div className="absolute left-[48%] top-0 h-4 bg-yellow-400" style={{ width: "24%" }}></div>
          <div className="absolute left-[72%] top-0 h-4 rounded-r-full bg-red-500" style={{ width: "28%" }}></div>
          <div className="absolute left-[48%] -top-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-[#A0A3C2]"></div>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-green-400 font-semibold">48.2%</span>
          <span className="text-[#A0A3C2]">100%</span>
        </div>
        <div className="text-green-400 text-xs mt-1">-6.8% (GOOD)</div>
      </div>
      {/* Renewal Retention */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-[#A0A3C2] mb-1">
          <span>RENEWAL RETENTION</span>
          <span className="font-semibold">TG: 85-90%</span>
        </div>
        <div className="relative h-4 rounded-full bg-[#23263A] overflow-hidden mb-1">
          <div className="absolute left-0 top-0 h-4 rounded-l-full bg-red-500" style={{ width: "12%" }}></div>
          <div className="absolute left-[12%] top-0 h-4 bg-yellow-400" style={{ width: "76%" }}></div>
          <div className="absolute left-[88%] top-0 h-4 rounded-r-full bg-green-400" style={{ width: "12%" }}></div>
          <div className="absolute left-[88%] -top-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-[#A0A3C2]"></div>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-green-400 font-semibold">88%</span>
          <span className="text-[#A0A3C2]">100%</span>
        </div>
        <div className="text-green-400 text-xs mt-1">ON TARGET</div>
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