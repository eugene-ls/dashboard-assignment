import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#181C2F]">
      <div className="max-w-[1200px] mx-auto px-4">
        {children}
      </div>
    </div>
  );
}