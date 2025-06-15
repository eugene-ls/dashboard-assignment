import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FaShip, FaShieldAlt, FaHardHat, FaUmbrellaBeach } from "react-icons/fa";

const policies = [
  {
    line: "Marine Cargo",
    number: "17030212",
    effDate: "6/30/2026",
    expDate: "6/30/2027",
    status: "Active",
    statusColor: "bg-green-500",
    icon: <FaShip className="text-blue-400" />,
    expiringTech: "$587,500",
    expiringPremium: "$605,000",
    renewalToTech: "$610,000",
    renewalTech: "$620,000",
    renewalPremium: "$625,000",
    rateChange: "3.3%",
    rateChangeColor: "text-white",
    lossRatio: "22%",
    lossRatioColor: "bg-green-500",
  },
  {
    line: "General Liability",
    number: "4631092",
    effDate: "6/30/2026",
    expDate: "6/30/2027",
    status: "Active",
    statusColor: "bg-green-500",
    icon: <FaShieldAlt className="text-green-400" />,
    expiringTech: "$160,000",
    expiringPremium: "$165,000",
    renewalToTech: "$170,000",
    renewalTech: "$172,500",
    renewalPremium: "$175,000",
    rateChange: "6.1%",
    rateChangeColor: "text-red-400",
    lossRatio: "55%",
    lossRatioColor: "bg-yellow-400 text-[#23263A]",
  },
  {
    line: "Workers Comp",
    number: "9182371",
    effDate: "Pending",
    expDate: "Pending",
    status: "Pending",
    statusColor: "bg-yellow-400",
    icon: <FaHardHat className="text-yellow-400" />,
    expiringTech: "$0",
    expiringPremium: "$0",
    renewalToTech: "$73,500",
    renewalTech: "$75,000",
    renewalPremium: "$75,000",
    rateChange: "N/A",
    rateChangeColor: "text-white",
    lossRatio: "N/A",
    lossRatioColor: "",
  },
  {
    line: "Umbrella",
    number: "5274936",
    effDate: "13/03/2026",
    expDate: "13/03/2027",
    status: "Active",
    statusColor: "bg-green-500",
    icon: <FaUmbrellaBeach className="text-purple-400" />,
    expiringTech: "$245,000",
    expiringPremium: "$250,000",
    renewalToTech: "$267,500",
    renewalTech: "$270,000",
    renewalPremium: "$275,000",
    rateChange: "10.0%",
    rateChangeColor: "text-red-400",
    lossRatio: "78%",
    lossRatioColor: "bg-red-500",
  },
];

export default function PoliciesContainer() {
  return (
    <div className="w-full">
      <div className="bg-[#23263A] rounded-2xl p-6 w-full">
        {/* Панель поиска и фильтров */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#23263A] border border-[#44485c] rounded-full px-4 py-1 text-white text-sm outline-none w-40"
          />
          <button className="border border-blue-400 text-blue-400 rounded-full px-4 py-1 text-sm hover:bg-blue-400 hover:text-white transition">Filter</button>
          <button className="border border-blue-400 text-blue-400 rounded-full px-4 py-1 text-sm hover:bg-blue-400 hover:text-white transition">Group</button>
        </div>
        {/* Таблица */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-[#b3b8d0] border-b border-[#44485c]">
                <th className="py-2 font-medium">LINE</th>
                <th className="py-2 font-medium">EFF. DATE</th>
                <th className="py-2 font-medium">EXP. DATE</th>
                <th className="py-2 font-medium">STATUS</th>
                <th className="py-2 font-medium">EXPIRING TECH</th>
                <th className="py-2 font-medium">EXPIRING PREMIUM</th>
                <th className="py-2 font-medium">RENEWAL TO TECH</th>
                <th className="py-2 font-medium">RENEWAL TECH</th>
                <th className="py-2 font-medium">RENEWAL PREMIUM</th>
                <th className="py-2 font-medium">RATE CHANGE</th>
                <th className="py-2 font-medium">LOSS RATIO</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {policies.map((p, idx) => (
                <tr key={p.number} className="border-b border-[#23263A] hover:bg-[#262a40] transition">
                  <td className="py-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#181B2A] text-xl">
                      {p.icon}
                    </span>
                    <div>
                      <div className="text-white font-semibold">{p.line}</div>
                      <div className="text-[#b3b8d0] text-xs">{p.number}</div>
                    </div>
                  </td>
                  <td className="py-3 text-[#b3b8d0]">{p.effDate}</td>
                  <td className="py-3 text-[#b3b8d0]">{p.expDate}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1 ${p.statusColor} rounded-full px-2 py-0.5 text-xs text-white`}>
                      ● {p.status}
                    </span>
                  </td>
                  <td className="py-3 text-[#b3b8d0]">{p.expiringTech}</td>
                  <td className="py-3 text-[#b3b8d0]">{p.expiringPremium}</td>
                  <td className="py-3 text-[#b3b8d0]">{p.renewalToTech}</td>
                  <td className="py-3 text-[#b3b8d0]">{p.renewalTech}</td>
                  <td className="py-3 text-[#b3b8d0]">{p.renewalPremium}</td>
                  <td className={`py-3 font-semibold ${p.rateChangeColor}`}>{p.rateChange}</td>
                  <td className="py-3">
                    {p.lossRatio !== "N/A" ? (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${p.lossRatioColor}`}>
                        {p.lossRatio}
                      </span>
                    ) : (
                      <span className="text-[#b3b8d0] text-xs">N/A</span>
                    )}
                  </td>
                  <td className="py-3">
                    <button className="text-[#b3b8d0] hover:text-white">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
              {/* Итоговая строка */}
              <tr className="border-t border-[#44485c]">
                <td className="py-3 text-[#b3b8d0] font-semibold" colSpan={4}>TOTAL (4)</td>
                <td className="py-3 text-[#b3b8d0] font-semibold">$992,500</td>
                <td className="py-3 text-[#b3b8d0] font-semibold">$1,020,000</td>
                <td className="py-3 text-[#b3b8d0] font-semibold">$1,121,000</td>
                <td className="py-3 text-[#b3b8d0] font-semibold">$1,137,500</td>
                <td className="py-3 text-[#b3b8d0] font-semibold">$1,150,000</td>
                <td className="py-3 text-[#b3b8d0] font-semibold">6.9%</td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#23263A] bg-yellow-400">58.3%</span>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}