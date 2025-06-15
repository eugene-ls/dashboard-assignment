import React from "react";
import WinnabilityScore from "./WinnabilityScore";
import WinnabilityTrend from "./WinnabilityTrend";
import WinnabilityPosition from "./WinnabilityPosition";
import IncreasingWinnability from "./IncreasingWinnability";
import DecreasingWinnability from "./DecreasingWinnability";
import AIRecommendations from "./AIRecommendations";

export default function WinnabilityCard() {
  return (
    <div className="bg-[#181B2A] rounded-2xl p-12 flex flex-col gap-4 shadow-lg">
      <div className="text-white text-4xl font-semibold mb-1">Winnability</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-[#23263A] p-6 shadow transition duration-200 hover:scale-105 hover:bg-[#2d314a]">
          <WinnabilityScore />
        </div>
        <div className="rounded-2xl bg-[#23263A] p-6 shadow transition duration-200 hover:scale-105 hover:bg-[#2d314a]">
          <WinnabilityTrend />
        </div>
        <div className="rounded-2xl bg-[#23263A] p-6 shadow transition duration-200 hover:scale-105 hover:bg-[#2d314a]">
          <WinnabilityPosition />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-2xl bg-[#23263A] p-6 shadow transition duration-200 hover:scale-105 hover:bg-[#2d314a]">
          <IncreasingWinnability />
        </div>
        <div className="rounded-2xl bg-[#23263A] p-6 shadow transition duration-200 hover:scale-105 hover:bg-[#2d314a]">
          <DecreasingWinnability />
        </div>
      </div>
      <div className="rounded-2xl bg-[#23263A] p-6 shadow">
        <AIRecommendations />
      </div>
    </div>
  );
}