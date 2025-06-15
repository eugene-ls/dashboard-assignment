import React from "react";

export default function WinnabilityTrend() {
  return (
    <div className="bg-[#23263A] rounded-xl p-4 flex-1 min-w-[180px]">
      <span className="text-[#b3b8d0] text-sm mb-2">Historical trend</span>
      <div className="h-12 flex items-end">
        <svg width="120" height="40">
          <polyline
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3"
            points="0,30 20,20 40,25 60,15 80,20 100,10 120,20"
          />
        </svg>
      </div>
      <div className="flex gap-2 text-xs text-[#b3b8d0] mt-1">
        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Now</span>
      </div>
    </div>
  );
}