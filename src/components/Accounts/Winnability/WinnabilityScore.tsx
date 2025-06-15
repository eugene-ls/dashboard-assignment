import React from "react";
import { motion } from "framer-motion";

export default function WinnabilityScore() {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-[#23263A] rounded-xl p-4 flex flex-col items-start min-w-[180px] cursor-pointer"
    >
      <span className="text-[#b3b8d0] text-sm mb-2">Overall Score</span>
      <span className="text-white text-3xl font-bold">82%</span>
      <span className="bg-[#23263A] border border-[#44485c] rounded-full px-3 py-1 text-xs mt-2 text-[#60a5fa]">
        Very Strong
      </span>
    </motion.div>
  );
}