import React from "react";

export default function AccountFilter({ onChange }: { onChange: (v: string) => void }) {
  return (
    <input
      className="mb-6 p-3 rounded-lg bg-[#23263A] text-white w-full outline-none border border-[#2c3150] focus:border-blue-500 transition"
      placeholder="Search accounts..."
      onChange={e => onChange(e.target.value)}
    />
  );
}