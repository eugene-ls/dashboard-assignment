import React from "react";
import { motion } from "framer-motion";

const exposures = [
  { label: "Marine Cargo", value: 71.4 },
  { label: "General Liability", value: 20 },
  { label: "Workers Comp", value: 8.6 },
];

export default function ExposureDistribution() {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-[#23263A] rounded-2xl p-8 w-[360px] h-[180px] flex flex-col justify-between cursor-pointer"
    >
      <div className="text-white text-lg font-medium mb-4">
        Exposure Distribution
      </div>
      <div className="flex flex-col gap-3">
        {exposures.map((e) => (
          <div className="flex items-center" key={e.label}>
            <div className="flex-1 mr-4">
              <div className="w-full h-3 bg-[#23283F] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${e.value}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-blue-500 rounded-full"
                />
              </div>
            </div>
            <div className="text-[#A0A3C2] text-base whitespace-nowrap">
              {e.label}: <span className="text-white">{e.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}