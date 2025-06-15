import React from "react";
import { motion } from "framer-motion";

export default function WinnabilityC() {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-[#23263A] rounded-2xl p-8 w-[340px] h-[220px] flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="text-[#b3b8d0] text-lg font-medium mb-2">Overall Score</div>
        <div className="flex items-center gap-4">
          <span className="text-white text-5xl font-bold">82%</span>

          <span className="flex items-center border border-blue-400 rounded-full px-4 py-1 ml-2">
            <span className="flex gap-1 mr-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
            </span>
            <span className="text-blue-400 text-sm font-medium">Very Strong</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}