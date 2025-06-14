import React from "react";
import AccountNeedsAttention from "../components/Accounts/AccountNeedsAttention";

export default function Accounts() {
  return (
    <div className="min-h-screen px-8 py-8 bg-[#181B2A]">
      <h2 className="text-3xl font-semibold mb-8 text-white"></h2>
      <AccountNeedsAttention />
    </div>
  );
}