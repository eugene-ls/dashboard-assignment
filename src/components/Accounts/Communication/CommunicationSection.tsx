import React from "react";

type MessageType = "new" | "responded" | "business";

interface Message {
  type: MessageType;
  title: string;
  author: string;
  date: string;
  text: string;
  attachments?: number;
  attachmentsLabel?: string;
  reply?: boolean;
}

const messages: Message[] = [
  {
    type: "new",
    title: "Policy Renewal - Auto Insurance 5/15/25",
    author: "Michael Roberts",
    date: "Apr 5",
    text: "Hello Arthur, I'm reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I've attached the current policy details and premium breakdown for your reference.",
    attachments: 3,
    attachmentsLabel: "attachments",
    reply: true,
  },
  {
    type: "new",
    title: "New Quote Request - Workers Comp Insurance",
    author: "Sarah Chen",
    date: "Apr 5",
    text: "Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I've completed the initial risk assessment based...",
    attachments: 3,
    attachmentsLabel: "attachments",
    reply: true,
  },
  {
    type: "responded",
    title: "Fwd: New Submission - BPM Real Estate - EFF 4/1/24",
    author: "Joshua Dunmire",
    date: "Mar 25",
    text: "Arthur, attached please find our submission for the above mentioned applicant. We have...",
    attachments: null,
    reply: false,
  },
  {
    type: "business",
    title: "New Business: BPM Real Estate Group, LLC",
    author: "Isabel Kreller",
    date: "Feb 28",
    text: "Hello Arthur, I am pleased to present you with a submission on this client's upcoming...",
    attachments: 5,
    attachmentsLabel: "attachments",
    reply: true,
  },
];

function MessageCard({ msg }: { msg: Message }) {
  return (
    <div
      className={`
        bg-[#23263A] rounded-2xl p-5
        ${msg.type === "new" ? "border border-blue-400" : ""}
        flex flex-col min-w-[320px]
      `}
    >
      <div className="flex items-center gap-2 mb-1">
        {msg.type === "new" && (
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">NEW</span>
        )}
        {msg.type === "responded" && (
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">Responded</span>
        )}
        <span className="text-white font-semibold">{msg.title}</span>
      </div>
      <div className="text-[#b3b8d0] text-xs mb-1">
        {msg.author} // {msg.date}
      </div>
      <div className="text-[#b3b8d0] text-sm mb-3">{msg.text}</div>
      <div className="flex items-center gap-2 mt-auto">
        {msg.attachments && (
          <span className="bg-green-600/80 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
            <svg width="14" height="14" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7.5 10.833V5.833a2.5 2.5 0 1 1 5 0v7.5a3.333 3.333 0 1 1-6.667 0V7.5a.833.833 0 1 1 1.667 0v5.833a1.667 1.667 0 1 0 3.333 0v-7.5a.833.833 0 1 0-1.667 0v5H7.5Z"/></svg>
            {msg.attachments} {msg.attachmentsLabel}
          </span>
        )}
        {msg.reply && (
          <button className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full ml-2 hover:bg-blue-400 transition">
            Reply
          </button>
        )}
      </div>
    </div>
  );
}

export default function CommunicationSection() {
  return (
    <div className="w-full">
      {/* Надпись Communication над контейнером */}
      <div className="text-white text-2xl font-semibold mb-4">Communication</div>
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
        {/* Сообщения в две колонки */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-6">
            <MessageCard msg={messages[0]} />
            <MessageCard msg={messages[1]} />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <MessageCard msg={messages[2]} />
            <MessageCard msg={messages[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}