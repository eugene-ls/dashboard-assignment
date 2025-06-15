import React from "react";

interface PolicyCardProps {
  icon: React.ReactNode;
  title: string;
  premium: string;
  effDate: string;
  iconColor: string;
  width?: string;
  height?: string;
}

export default function PolicyCard({
  icon,
  title,
  premium,
  effDate,
  iconColor,
  width = "w-[250px]",
  height = "min-h-[110px]",
}: PolicyCardProps) {
  return (
    <div
      className={`bg-[#23263A] rounded-2xl p-4 flex flex-col ${width} ${height} transition-all duration-200 cursor-pointer hover:scale-105 hover:bg-[#2d314a]`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className={iconColor}>{icon}</span>
        <span className="text-white text-xl font-medium">{title}</span>
      </div>
      <div className="text-[#A0A3C2] text-base">Premium: {premium}</div>
      <div className="text-[#A0A3C2] text-base">Eff.Date: {effDate}</div>
    </div>
  );
}