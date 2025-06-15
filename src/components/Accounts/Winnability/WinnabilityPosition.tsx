import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const data = [
  { label: "Your score:", value: 82, color: "#60a5fa" },
  { label: "Market Avg:", value: 68, color: "#818cf8" },
  { label: "Top competitor:", value: 88, color: "#facc15" },
];

export default function WinnabilityPosition() {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(false), 20000);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-[#23263A] rounded-xl p-4 flex flex-col min-w-[180px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-[#b3b8d0] text-sm mb-2">Position</span>
      <div className="flex flex-col gap-1">
        {data.map((item) => (
          <div className="flex items-center gap-2" key={item.label}>
            <span className="w-20 text-xs text-[#b3b8d0]">{item.label}</span>
            <div className="flex-1 bg-[#22263a] rounded h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: hovered ? `${item.value}%` : 0 }}
                transition={{ duration: 0.7 }}
                className="h-2 rounded"
                style={{ background: item.color }}
              />
            </div>
            <span className="text-xs text-white ml-2">{item.value}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}