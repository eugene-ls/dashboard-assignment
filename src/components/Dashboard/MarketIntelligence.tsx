import React from "react";
import Card from "../common/Card";

const news = [
  { color: "bg-red-500", text: "Rate hardening in Cyber market - +15% YoY" },
  { color: "bg-yellow-400", text: "New capacity entering Marine market" },
  { color: "bg-blue-500", text: "Environmental regulatory changes in CA" },
];

export default function MarketIntelligence() {
  return (
    <Card className="bg-[#23263A] rounded-2xl border border-white/20 p-8 shadow-lg w-full">
      <h2 className="text-lg font-semibold mb-4 text-white">Market intelligence</h2>
      <ul className="space-y-2">
        {news.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span
              className={`w-3 h-3 rounded-full border-2 border-white/80 ${item.color} flex-shrink-0 mt-0.5`}
            ></span>
            <span className="text-white text-xs">{item.text}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}