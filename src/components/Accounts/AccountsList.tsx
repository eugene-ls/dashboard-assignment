// src/components/Accounts/AccountsList.tsx
import React from "react";
import AccountsCard from "./AccountsCard";

const mockAccounts = [
  { id: 1, name: "Maritime Logistics Corp", city: "Seattle", status: "Active" },
  { id: 2, name: "Real Estate Group", city: "New York", status: "Pending" },
];

export default function AccountsList({ filter }: { filter: string }) {
  const filtered = mockAccounts.filter(acc =>
    acc.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {filtered.map(acc => (
        <AccountsCard key={acc.id} account={acc} />
      ))}
    </div>
  );
}