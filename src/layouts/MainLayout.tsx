import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#181B2A] text-white font-sans">
      <header className="flex items-center justify-between px-8 py-4 bg-[#23263A]">
        <h1 className="text-2xl font-semibold">
          Hi Arthur, welcome! You have 12 open tasks.
        </h1>
        <div className="flex items-center gap-4">
          <input
            className="bg-[#23263A] border border-white/10 rounded-lg px-5 py-2 w-64 text-white placeholder-[#A0A3C2] outline-none transition"
            placeholder="Search"
          />
          <div className="bg-[#22337C] w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base">
            AR
          </div>
        </div>
      </header>
      <nav className="flex gap-4 px-8 py-4 bg-[#23263A]">
        {[
          "Dashboard",
          "Accounts",
          "Brokers",
          "Submissions",
          "Organizations",
          "Goals & Rules",
          "Admin",
        ].map((item) => (
          <button
            key={item}
            className="px-4 py-2 rounded-lg bg-[#23263A] text-white hover:bg-[#31344D] focus:bg-blue-600 focus:outline-none"
          >
            {item}
          </button>
        ))}
      </nav>
      <main className="px-8 py-6">{children}</main>
    </div>
  );
}