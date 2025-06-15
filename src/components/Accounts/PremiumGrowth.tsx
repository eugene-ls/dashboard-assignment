import React from "react";
import { motion } from "framer-motion";

export default function PremiumGrowth() {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-[#23263A] rounded-2xl p-8 w-[340px] h-[220px] flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="text-white text-lg font-medium mb-2">
          Premium Growth
        </div>
        <div className="text-white text-5xl font-light mb-2 flex items-end">
          12.4%
          <span className="text-[#A0A3C2] text-2xl font-normal ml-3 mb-1">
            YoY increase
          </span>
        </div>
        <div className="text-[#A0A3C2] text-xl font-normal">
          $123M vs $150M Target
        </div>
      </div>
      <a href="#" className="text-blue-400 text-base hover:underline mt-auto">
        View trend &rarr;
      </a>
    </motion.div>
  );
}