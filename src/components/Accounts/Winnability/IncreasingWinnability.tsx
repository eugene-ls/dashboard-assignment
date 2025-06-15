import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const data = [
  { label: "Brokers relationship", value: "+28%", width: 80 },
  { label: "Loss history", value: "+22%", width: 60 },
  { label: "Industry growth", value: "+16%", width: 45 },
  { label: "Multiline opportunity", value: "+11%", width: 30 },
];

export default function IncreasingWinnability() {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 20000); // 20 seconds delay
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-[#23263A] rounded-xl p-4 flex-1 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 text-green-400 mb-2">
        <FaArrowUp />
        <span className="text-white font-semibold">Increasing Winnability</span>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((item, idx) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="bg-[#23263A] border border-green-400 rounded-full w-6 h-6 flex items-center justify-center text-xs text-green-400">{idx + 1}</span>
            <span className="text-white flex-1">{item.label}</span>
            <div className="flex-1 bg-[#22263a] rounded h-2 mx-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: hovered ? `${item.width}%` : 0 }}
                transition={{ duration: 0.7, delay: hovered ? idx * 0.08 : 0 }}
                className="bg-green-400 h-2 rounded"
              />
            </div>
            <span className="text-green-400 text-sm font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}