import React from "react";
import Card from "../common/Card";

export default function QuickActions() {
  return (
    <Card className="bg-[#23263A] rounded-2xl border border-white/20 p-4 shadow-lg w-full flex flex-col items-center">
      <h2 className="text-base font-semibold mb-3 text-white text-left w-full">Quick actions</h2>
      <div className="flex flex-col gap-2 w-full">
        <button className="bg-blue-500 text-white font-semibold rounded-full py-2 w-full text-sm transition hover:bg-blue-600">
          New Submission
        </button>
        <button className="bg-blue-500 text-white font-semibold rounded-full py-2 w-full text-sm transition hover:bg-blue-600">
          Quote Builder
        </button>
        <button className="bg-blue-500 text-white font-semibold rounded-full py-2 w-full text-sm transition hover:bg-blue-600">
          Risks Models
        </button>
        <button className="bg-blue-500 text-white font-semibold rounded-full py-2 w-full text-sm transition hover:bg-blue-600">
          Documents Upload
        </button>
      </div>
    </Card>
  );
}