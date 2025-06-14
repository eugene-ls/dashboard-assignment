import React from "react";
import Card from "../common/Card";

const workQueue = [
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

export default function WorkQueue() {
  return (
    <Card className="bg-[#23263A] rounded-2xl border border-white/20 p-6 shadow-lg w-full max-w-[1200px]">
      <h2 className="text-[22px] font-semibold mb-4 text-white leading-tight">Work Queue</h2>
      <div className="flex gap-2 mb-4">
        <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full font-semibold shadow text-sm">
          Assigned to me (12)
        </button>
        <button className="bg-[#181C2F] text-white px-4 py-1.5 rounded-full font-semibold text-sm">
          Pending Review (8)
        </button>
        <button className="bg-[#181C2F] text-white px-4 py-1.5 rounded-full font-semibold text-sm">
          Referrals (3)
        </button>
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
          {workQueue.map((item, idx) => (
            <tr
              key={idx}
              className="border-b border-[#2E314D] last:border-none hover:bg-[#181C2F] transition"
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
              <td className="py-2 px-4">
                <span className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-[#181C2F] cursor-pointer text-[#A0A3C2]">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="2" fill="currentColor"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <circle cx="12" cy="19" r="2" fill="currentColor"/>
                  </svg>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}