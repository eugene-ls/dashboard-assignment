// src/components/Accounts/AccountsCard.tsx
import React from "react";
import { Link } from "react-router-dom";

type Account = {
  id: number;
  name: string;
  city: string;
  status: string;
};

export default function AccountsCard({ account }: { account: Account }) {
  return (
    <Link to={`/accounts/${account.id}`}>
      <div>{account.name}</div>
      <div>{account.city}</div>
      <div>{account.status}</div>
    </Link>
  );
}