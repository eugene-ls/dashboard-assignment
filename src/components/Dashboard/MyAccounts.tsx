import React, { useState } from "react";
import Card from "../common/Card";

const accounts = [
  {
    name: "NAMEX Tech Solutions",
    type: "Large Enterprise",
    line: "D&O Liability",
    broker: "Willis Towers",
    renewal: "04/16/2025",
    premium: "$2.3M",
    ratedPremium: "$2.8M",
    lossRatio: "32%",
    appetite: "HIGH",
    status: "Active",
    triage: 180,
    winnability: "Very Strong",
  },
  {
    name: "Alliance Healthcare Systems",
    type: "Mid-Market",
    line: "Medical Malpractice",
    broker: "Aon Risk",
    renewal: "06/30/2025",
    premium: "$1.7M",
    ratedPremium: "$1.9M",
    lossRatio: "38%",
    appetite: "MEDIUM",
    status: "Under review",
    triage: 165,
    winnability: "Strong",
  },
  {
    name: "Maritime Logistics Corp",
    type: "Shipping/Logistics",
    line: "Marine Cargo",
    broker: "Marsh McLennan",
    renewal: "09/05/2025",
    premium: "$875K",
    ratedPremium: "$920K",
    lossRatio: "25%",
    appetite: "HIGH",
    status: "Active",
    triage: 182,
    winnability: "Very Strong",
  },
  {
    name: "GreenField Energy Ltd",
    type: "Energy Sector",
    line: "Environmental Liability",
    broker: "Aon Risk",
    renewal: "07/22/2025",
    premium: "$1.2M",
    ratedPremium: "$1.4M",
    lossRatio: "67%",
    appetite: "CAUTIOUS",
    status: "Under review",
    triage: 158,
    winnability: "Medium",
  },
];

const appetiteColors: Record<string, string> = {
  HIGH: "bg-[#2a3fa4] text-white",
  MEDIUM: "bg-[#2a3fa4] text-white",
  CAUTIOUS: "bg-[#2a3fa4] text-white",
};

const statusColors: Record<string, string> = {
  Active: "text-green-400",
  "Under review": "text-yellow-400",
};

const winnabilityLevels: Record<string, number> = {
  "Very Strong": 5,
  Strong: 4,
  Medium: 3,
};

const winnabilityLabels: Record<string, string> = {
  "Very Strong": "Very Strong",
  Strong: "Strong",
  Medium: "Medium",
};

const menuOptions = [
  { label: "View details" },
  { label: "Edit" },
  { label: "Delete" },
];

export default function MyAccounts() {
  const [menuIdx, setMenuIdx] = useState<number | null>(null);

  return (
    <Card className="bg-[#23263A] rounded-2xl border border-white/20 p-4 shadow-lg w-full">
      <div className="flex items-center mb-2">
        <h2 className="text-lg font-semibold text-white mr-6">My accounts</h2>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#181C2F] rounded-full px-5 py-1.4 text-white text-sm outline-none w-44"
          />
          <button className="border border-blue-500 text-blue-400 bg-transparent rounded-full px-5 py-1.4 text-sm font-semibold transition hover:bg-blue-500/10">
            Filter
          </button>
          <button className="border border-blue-500 text-blue-400 bg-transparent rounded-full px-5 py-1.4 text-sm font-semibold transition hover:bg-blue-500/10">
            Sort
          </button>
          <button className="border border-blue-500 text-blue-400 bg-transparent rounded-full px-5 py-1.4 text-sm font-semibold transition hover:bg-blue-500/10">
            Group
          </button>
          <button className="bg-blue-500 text-white rounded-full px-5 py-1.2 text-sm font-semibold">
            + New
          </button>
        </div>
      </div>
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="text-[#A0A3C2] uppercase">
            <th className="py-1 px-2 font-medium">Account Name/Type</th>
            <th className="py-1 px-2 font-medium">Line</th>
            <th className="py-1 px-2 font-medium">Broker</th>
            <th className="py-1 px-2 font-medium">Renewal Date</th>
            <th className="py-1 px-2 font-medium">Premium</th>
            <th className="py-1 px-2 font-medium">Rated Premium</th>
            <th className="py-1 px-2 font-medium">Loss Ratio</th>
            <th className="py-1 px-2 font-medium">Appetite</th>
            <th className="py-1 px-2 font-medium">Status</th>
            <th className="py-1 px-2 font-medium">Triage</th>
            <th className="py-1 px-2 font-medium">Winnability</th>
            <th className="py-1 px-2"></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, idx) => (
            <tr
              key={idx}
              className={`border-b border-[#2E314D] last:border-none hover:bg-[#181C2F] transition ${
                idx % 2 === 1 ? "bg-[#20233a]" : ""
              }`}
            >
              <td className="py-2 px-2">
                <div className="font-medium text-white text-xs">{acc.name}</div>
                <div className="text-[10px] text-[#A0A3C2]">{acc.type}</div>
              </td>
              <td className="py-2 px-2">
                <div className="font-medium text-white text-xs">{acc.line}</div>
              </td>
              <td className="py-2 px-2">
                <div className="font-medium text-white text-xs">{acc.broker}</div>
              </td>
              <td className="py-2 px-2 text-white">{acc.renewal}</td>
              <td className="py-2 px-2 text-blue-400 font-semibold">{acc.premium}</td>
              <td className="py-2 px-2 text-[#A0A3C2]">{acc.ratedPremium}</td>
              <td className="py-2 px-2">
                <span
                  className={`px-1 py-0.5 rounded-full text-[10px] font-semibold ${
                    parseInt(acc.lossRatio) > 50
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {acc.lossRatio}
                </span>
              </td>
              <td className="py-2 px-2">
                <span
                  className="w-16 flex justify-center items-center px-0 py-0.5 rounded-full text-[10px] font-medium"
                  style={{ background: "#2a3fa4", color: "#fff", minWidth: "4rem" }}
                >
                  {acc.appetite}
                </span>
              </td>
              <td className="py-2 px-2">
                <span className="flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full inline-block ${
                      acc.status === "Active"
                        ? "bg-green-400"
                        : "bg-blue-400"
                    }`}
                  ></span>
                  <span
                    className={`font-semibold text-[10px] text-white-400`}
                  >
                    {acc.status}
                  </span>
                </span>
              </td>
              <td className="py-2 px-1">
                <span className="inline-block bg-blue-900 text-blue-300 font-bold text-xs rounded-full px-3 py-0.5 tracking-wide">
                  {acc.triage}
                </span>
              </td>
              <td className="py-1.5 px-1.2">
                <span className="flex items-center border border-blue-400 rounded-full px-3 py-0.5 gap-2 bg-transparent">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < winnabilityLevels[acc.winnability]
                          ? "bg-blue-400"
                          : "bg-[#23263A] border border-blue-400"
                      }`}
                    ></span>
                  ))}
                  <span className="text-blue-300 text-[12px] font-medium ml-1">
                    {winnabilityLabels[acc.winnability]}
                  </span>
                </span>
              </td>
              <td className="py-2 px-2 relative">
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
                  <div className="absolute right-0 top-9 z-10 bg-[#23263A] border border-[#2E314D] rounded-lg shadow-lg min-w-[140px]">
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