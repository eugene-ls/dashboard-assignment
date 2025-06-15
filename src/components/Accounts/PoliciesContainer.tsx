import React from "react";
import PolicyCard from "./PolicyCard";
import { FaShip, FaShieldAlt, FaUserShield, FaBuilding, FaUmbrella } from "react-icons/fa";

export default function PoliciesContainer() {
  return (
    <div className="bg-[#20243A] rounded-2xl p-6 mt-8 mx-8 border border-[#35384C] h-[160px] w-[1420px]">
      <div className="flex gap-4 flex-wrap">
        <PolicyCard
          icon={<FaShip size={24} />}
          iconColor="text-blue-400"
          title="Marine Cargo"
          premium="$625,000"
          effDate="6/30/2026"
        />
        <PolicyCard
          icon={<FaShieldAlt size={24} />}
          iconColor="text-green-400"
          title="General Liability"
          premium="$175,000"
          effDate="6/30/2026"
        />
        <PolicyCard
          icon={<FaUserShield size={24} />}
          iconColor="text-purple-400"
          title="Workers Comp"
          premium="$75,000"
          effDate="06/02/2007"
        />
        <PolicyCard
          icon={<FaBuilding size={24} />}
          iconColor="text-yellow-400"
          title="Property"
          premium="$64,829.83"
          effDate="6/30/2026"
        />
        <PolicyCard
          icon={<FaUmbrella size={24} />}
          iconColor="text-red-400"
          title="Umbrella"
          premium="$275,000"
          effDate="13/03/2026"
        />
      </div>
    </div>
  );
}