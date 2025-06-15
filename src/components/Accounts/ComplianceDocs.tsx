import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ComplianceDocs() {
  const docs = [
    "KYC verification",
    "Required Documentation",
    "Regulatory approval",
    "Financial Verification",
  ];

  return (
    <div className="bg-[#23263A] rounded-2xl p-8 flex flex-col gap-4">
      <div className="flex flex-wrap gap-x-12 gap-y-2">
        {docs.map((doc) => (
          <div
            key={doc}
            className="flex items-center gap-2 text-white text-base"
            style={{ minHeight: "2rem" }} 
          >
            <FaCheckCircle className="text-green-400" size={22} style={{ verticalAlign: "middle" }} />
            {doc}
          </div>
        ))}
      </div>
    </div>
  );
}