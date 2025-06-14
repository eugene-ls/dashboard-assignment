import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// SVG иконки для навигации
const icons = {
  dashboard: (
    <svg width="18" height="18" fill="none"><path d="M3 8.5V15h4v-4h4v4h4V8.5L9 3 3 8.5Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round"/></svg>
  ),
  accounts: (
    <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="7" stroke="#3B82F6" strokeWidth="1.5"/><circle cx="9" cy="9" r="3" stroke="#3B82F6" strokeWidth="1.5"/></svg>
  ),
  brokers: (
    <svg width="18" height="18" fill="none"><circle cx="9" cy="6" r="3" stroke="#3B82F6" strokeWidth="1.5"/><path d="M3 15c0-2.5 2.5-4 6-4s6 1.5 6 4" stroke="#3B82F6" strokeWidth="1.5"/></svg>
  ),
  submissions: (
    <svg width="18" height="18" fill="none"><rect x="3" y="3" width="12" height="12" rx="2" stroke="#3B82F6" strokeWidth="1.5"/><path d="M6 9h6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  organizations: (
    <svg width="18" height="18" fill="none"><rect x="3" y="7" width="12" height="8" rx="2" stroke="#3B82F6" strokeWidth="1.5"/><rect x="7" y="3" width="4" height="4" rx="1" stroke="#3B82F6" strokeWidth="1.5"/></svg>
  ),
  goals: (
    <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="7" stroke="#3B82F6" strokeWidth="1.5"/><path d="M9 5v4l3 2" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ),
  admin: (
    <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="7" stroke="#3B82F6" strokeWidth="1.5"/><path d="M12 12l-6-6M6 12l6-6" stroke="#3B82F6" strokeWidth="1.5"/></svg>
  ),
};

const tabs = [
  { label: "Dashboard", icon: icons.dashboard, path: "/" },
  { label: "Accounts", icon: icons.accounts, path: "/accounts" },
  { label: "Brokers", icon: icons.brokers, path: "/brokers" },
  { label: "Submissions", icon: icons.submissions, path: "/submissions" },
  { label: "Organizations", icon: icons.organizations, path: "/organizations" },
  { label: "Goals & Rules", icon: icons.goals, path: "/goals-rules" },
  { label: "Admin", icon: icons.admin, path: "/admin" },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const scrollTabs = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const scrollAmount = 180;
    el.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#181B2A] text-white font-sans">
      {/* Верхний бар */}
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-normal ml-6">
          Hi Arthur, welcome! You have 12 open tasks.
        </h1>
        <div className="flex items-center gap-2">
          <input
            className="bg-[#23263A] border border-white/10 rounded-full px-4 py-2 w-80 text-white placeholder-[#A0A3C2] outline-none transition"
            placeholder="Search"
          />
          <div className="bg-[#22337C] w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base ml-2">
            AR
          </div>
        </div>
      </header>
      {/* Линия-разделитель */}
      <div className="border-b border-white/10" />
      {/* Навигация с иконками и скроллом */}
      <nav className="relative flex items-center px-8 py-4 ml-6">
        <div className="relative flex-1">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-3 pb-1"
            style={{ scrollBehavior: "smooth" }}
          >
            {tabs.map((tab, idx) => (
              <Link
                key={tab.label + idx}
                to={tab.path}
                className={`flex items-center gap-2 px-5 py-2 rounded-full border border-gray-400 text-white-300 bg-transparent transition-colors whitespace-nowrap
                  ${location.pathname === tab.path ? "bg-blue-500 text-white border-blue-500 shadow" : ""}
                  hover:bg-blue-500/10`}
                style={{ minWidth: 0 }}
              >
                <span className="flex items-center">{tab.icon}</span>
                <span className="font-medium text-[15px]">{tab.label}</span>
              </Link>
            ))}
          </div>
          {/* Scroll buttons */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2 pr-2">
            <button
              onClick={() => scrollTabs("left")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#23263A] border border-blue-400 text-blue-400 hover:bg-blue-500/10 transition"
              tabIndex={-1}
            >
              <svg width="18" height="18" fill="none"><path d="M11 5l-4 4 4 4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={() => scrollTabs("right")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#23263A] border border-blue-400 text-blue-400 hover:bg-blue-500/10 transition"
              tabIndex={-1}
            >
              <svg width="18" height="18" fill="none"><path d="M7 5l4 4-4 4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Контент */}
      <main className="px-8 py-6">{children}</main>
    </div>
  );
}