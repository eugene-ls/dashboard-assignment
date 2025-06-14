import React from "react";
import WorkQueue from "../components/Dashboard/WorkQueue";
import MyAccounts from "../components/Dashboard/MyAccounts";
import PortfolioGoals from "../components/Dashboard/PortfolioGoals";
import QuickActions from "../components/Dashboard/QuickActions";
import MarketIntelligence from "../components/Dashboard/MarketIntelligence";

export default function Dashboard() {
  return (
    <div className="min-h-[120vh] bg-[#181B2A]">
      <div className="flex gap-8 items-start">
        <div className="w-full max-w-[900px] h-[440px] ml-6">
          <WorkQueue />
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[30px] ml-16">
            <PortfolioGoals />
          </div>
          <div className="flex flex-col gap-3 ml-[280px] -mt-[495px]">
            <div className="w-[245px]">
              <QuickActions />
            </div>
            <div className="w-[245px]">
              <MarketIntelligence />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1430px] mx-auto mt-6 ml-6">
        <MyAccounts />
      </div>
    </div>
  );
}