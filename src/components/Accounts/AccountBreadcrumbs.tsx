import React from "react";
import { Link } from "react-router-dom";

export default function AccountBreadcrumbs({ accountName }: { accountName: string }) {
  return (
    <div className="text-[#A0A3C2] text-sm mt-4">
      <Link to="/" className="hover:underline">Dashboard</Link> //{" "}
      <Link to="/accounts" className="hover:underline">Accounts</Link> //{" "}
      <span className="text-blue-400">{accountName}</span>
    </div>
  );
}