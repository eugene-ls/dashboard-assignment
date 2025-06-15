import React from "react";

export default function AccountHeaderInfo() {
  return (
    <div>
      {/* Навигационная строка */}
      <div className="text-white text-base mb-4 mt-[-28px] ml-8">
        Dashboard <span className="text-[#A0A3C2]">//</span> Accounts <span className="text-[#A0A3C2]">//</span>{" "}
        <span className="text-blue-400 cursor-pointer hover:underline">Maritime Logistics Corp</span>
      </div>
      <div className="flex items-start gap-8 ml-6">
        {/* Логотип (большой круг) */}
        <img src="/logo.png"
         alt="Logo"
        className="w-24 h-24 rounded-full bg-white object-contain" />
        {/* Информация */}
        <div>
          <div className="text-4xl font-light text-white mb-1">
            Maritime Logistics Corp
          </div>
          <div className="flex items-center gap-6">
            {/* Адрес с абзацем после Suite 300 */}
            <span className="text-[#A0A3C2] text-sm">
              425 Harbor Boulevard, Suite 300<br />
              Seattle, WA 98104
            </span>
            {/* Existing Account */}
            <div className="pl-3 border-l border-[#3A3D4D]">
              <div className="uppercase text-[#A0A3C2] text-xs font-semibold mb-1 tracking-wide">
                Existing Account
              </div>
              <div className="text-white text-base font-normal">54383</div>
            </div>
            {/* Broker */}
            <div className="pl-3 border-l border-[#3A3D4D]">
              <div className="uppercase text-[#A0A3C2] text-xs font-semibold mb-1 tracking-wide">
                Broker
              </div>
              <div className="text-white text-base font-normal">Marsh McLennan</div>
            </div>
            {/* Underwriter */}
            <div className="pl-3 border-l border-[#3A3D4D]">
              <div className="uppercase text-[#A0A3C2] text-xs font-semibold mb-1 tracking-wide">
                Underwriter
              </div>
              <div className="text-white text-base font-normal">Kate Johnson</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}