import React, { useState } from "react";
import Card from "../common/Card";

// Данные для каждой вкладки
const assignedData = [
  {
    initials: "SM",
    name: "Sam Masters",
    client: "NAMEX Tech Solutions",
    clientLine: "Cyber Liability",
    type: "Underwriter Referral",
    status: "New",
    created: "04/16/2025",
  },
  {
    initials: "AW",
    name: "Annalise Willis",
    client: "Maritime Logistics Corp",
    clientLine: "Marine Cargo",
    type: "Underwriter Referral",
    status: "New",
    created: "04/20/2025",
  },
  {
    initials: "PD",
    name: "Patrick Devenport",
    client: "GreenField Energy Ltd",
    clientLine: "Environmental",
    type: "Loss Control Request",
    status: "New",
    created: "04/16/2025",
  },
  {
    initials: "AK",
    name: "Ana Kilian",
    client: "NorthStar Financial Group",
    clientLine: "D&O Liability",
    type: "Underwriter Referral",
    status: "Pending Review",
    created: "04/22/2025",
  },
  {
    initials: "AK",
    name: "Ana Kilian",
    client: "Alliance Healthcare Systems",
    clientLine: "Medical Malpractice",
    type: "Email",
    status: "Completed",
    created: "04/28/2025",
  },
  {
    initials: "MK",
    name: "Me",
    client: "QuantumTech Industries",
    clientLine: "Product Liability",
    type: "Email",
    status: "Completed",
    created: "04/20/2025",
  },
];

const pendingData = [
  {
    initials: "JS",
    name: "Julia Smith",
    client: "AeroSpace Ltd",
    clientLine: "Aviation",
    type: "Underwriter Referral",
    status: "Pending Review",
    created: "04/25/2025",
  },
  {
    initials: "RB",
    name: "Robert Brown",
    client: "Oceanic Shipping",
    clientLine: "Marine",
    type: "Loss Control Request",
    status: "Pending Review",
    created: "04/24/2025",
  },
  {
    initials: "LS",
    name: "Linda Stone",
    client: "Green Energy",
    clientLine: "Environmental",
    type: "Email",
    status: "Pending Review",
    created: "04/23/2025",
  },
];

const referralsData = [
  {
    initials: "TT",
    name: "Tom Taylor",
    client: "TechNova",
    clientLine: "Cyber Liability",
    type: "Referral",
    status: "New",
    created: "04/26/2025",
  },
  {
    initials: "EM",
    name: "Emily Moore",
    client: "HealthFirst",
    clientLine: "Medical Malpractice",
    type: "Referral",
    status: "Completed",
    created: "04/27/2025",
  },
];

const statusColors: Record<string, string> = {
  New: "bg-blue-500",
  "Pending Review": "bg-yellow-400",
  Completed: "bg-green-400",
};

const statusTextColors: Record<string, string> = {
  New: "text-blue-400",
  "Pending Review": "text-yellow-400",
  Completed: "text-green-400",
};

const tabs = [
  { label: "Assigned to me", count: assignedData.length, key: "assigned" },
  { label: "Pending Review", count: pendingData.length, key: "pending" },
  { label: "Referrals", count: referralsData.length, key: "referrals" },
];

const menuOptions = [
  { label: "View details" },
  { label: "Edit" },
  { label: "Delete" },
];

export default function WorkQueue() {
  const [activeTab, setActiveTab] = useState("assigned");
  const [menuIdx, setMenuIdx] = useState<number | null>(null);

  let data = assignedData;
  if (activeTab === "pending") data = pendingData;
  if (activeTab === "referrals") data = referralsData;

  return (
    <Card className="bg-[#23263A] rounded-2xl border border-white/20 p-6 shadow-lg w-full max-w-[1200px]">
      <h2 className="text-[22px] font-semibold mb-4 text-white leading-tight">Work Queue</h2>
      <div className="flex gap-2 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-1.5 rounded-full font-semibold text-xs transition
              ${activeTab === tab.key
                ? "bg-blue-500 text-white shadow"
                : "bg-[#181C2F] text-white"
              }
              hover:bg-[#23263A]
            `}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[#A0A3C2] text-[12px] uppercase">
            <th className="py-2 px-4 font-medium">Originator</th>
            <th className="py-2 px-4 font-medium">Client/Line</th>
            <th className="py-2 px-4 font-medium">Type</th>
            <th className="py-2 px-4 font-medium">Status</th>
            <th className="py-2 px-4 font-medium">Created</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className={`border-b border-[#2E314D] last:border-none transition ${
                idx % 2 === 1 ? "bg-[#20233a]" : ""
              }`}
            >
              <td className="py-2 px-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#181C2F] flex items-center justify-center font-bold text-[12px] text-white">
                  {item.initials}
                </span>
                <div>
                  <div className="font-medium text-white text-[13px] leading-tight">{item.name}</div>
                </div>
              </td>
              <td className="py-2 px-4">
                <div className="font-medium text-white text-[13px] leading-tight">{item.client}</div>
                <div className="text-[11px] text-[#A0A3C2]">{item.clientLine}</div>
              </td>
              <td className="py-2 px-4 text-white text-[13px]">{item.type}</td>
              <td className="py-2 px-4">
                <span className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${statusColors[item.status]}`}></span>
                  <span className={`text-[12px] font-semibold ${statusTextColors[item.status]}`}>{item.status}</span>
                </span>
              </td>
              <td className="py-2 px-4 text-white text-[13px]">{item.created}</td>
              <td className="py-2 px-4 relative">
                <button
                  className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#181C2F] cursor-pointer text-[#A0A3C2] transition"
                  onClick={() => setMenuIdx(menuIdx === idx ? null : idx)}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="2" fill="currentColor"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <circle cx="12" cy="19" r="2" fill="currentColor"/>
                  </svg>
                </button>
                {menuIdx === idx && (
                  <div className="absolute left-full top-1/2 -translate-y-1/2 z-10 bg-[#23263A] border border-[#2E314D] rounded-lg shadow-lg min-w-[140px] ml-2">
                    {menuOptions.map((opt, i) => (
                      <button
                        key={i}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#181C2F] transition"
                        onClick={() => setMenuIdx(null)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}