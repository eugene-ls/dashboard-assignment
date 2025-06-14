import React from "react";
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
  HIGH: "bg-blue-600 text-white",
  MEDIUM: "bg-blue-400 text-white",
  CAUTIOUS: "bg-yellow-400 text-black",
};

const statusColors: Record<string, string> = {
  Active: "bg-green-500 text-white",
  "Under review": "bg-yellow-400 text-black",
};

const winnabilityColors: Record<string, string> = {
  "Very Strong": "bg-blue-700 text-white",
  Strong: "bg-blue-500 text-white",
  Medium: "bg-blue-300 text-black",
};

export default function MyAccounts() {
  return (
    <Card className="bg-[#23263A] rounded-2xl border border-white/20 p-4 shadow-lg w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-white">My accounts</h2>
        <div className="flex gap-2 items-center">
          <button className="border border-blue-500 text-blue-400 bg-transparent rounded-full px-5 py-1 text-sm font-semibold transition hover:bg-blue-500/10">
            Filter
          </button>
          <button className="border border-blue-500 text-blue-400 bg-transparent rounded-full px-5 py-1 text-sm font-semibold transition hover:bg-blue-500/10">
            Sort
          </button>
          <button className="border border-blue-500 text-blue-400 bg-transparent rounded-full px-5 py-1 text-sm font-semibold transition hover:bg-blue-500/10">
            Group
          </button>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#181C2F] rounded-full px-5 py-1 text-white text-sm outline-none w-44"
          />
          <button className="bg-blue-500 text-white rounded-full px-5 py-1 text-sm font-semibold">
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
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, idx) => (
            <tr
              key={idx}
              className="border-b border-[#2E314D] last:border-none hover:bg-[#181C2F] transition"
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
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${appetiteColors[acc.appetite]}`}
                >
                  {acc.appetite}
                </span>
              </td>
              <td className="py-2 px-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColors[acc.status]}`}
                >
                  {acc.status}
                </span>
              </td>
              <td className="py-2 px-2 text-blue-400 font-semibold">{acc.triage}</td>
              <td className="py-2 px-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${winnabilityColors[acc.winnability]}`}
                >
                  {acc.winnability}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}