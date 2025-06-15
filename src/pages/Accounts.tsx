import React from "react";
import AccountHeaderInfo from "../components/Accounts/AccountHeaderInfo";
import AccountNeedsAttention from "../components/Accounts/AccountNeedsAttention";
import WinnabilityCard from "../components/Accounts/Winnability/WinnabilityCard";
import LossRatio from "../components/Accounts/LossRatio";
import PremiumGrowth from "../components/Accounts/PremiumGrowth";
import ExposureDistribution from "../components/Accounts/ExposureDistribution";
import PoliciesContainer from "../components/Accounts/PoliciesContainer";
import AccountStatus from "../components/Accounts/AccountStatus";
import ComplianceDocs from "../components/Accounts/ComplianceDocs";
import WinnabilityC from "../components/Accounts/WinnabilityC";
import DecisionSupportPanel from "../components/Accounts/Winnability/DecisionSupportPanel";
import CommunicationSection from "../components/Accounts/Communication/CommunicationSection"; 
import Policies from "../components/Accounts/Policies/Policies";
import Layout from "../components/lAyout";

export default function Accounts() {
  return (
    <div className="min-h-screen bg-[#181B2A] px-0 py-8 relative flex flex-col">
   
      <AccountHeaderInfo />

  
      <div className="mt-16 mb-8 ml-10">
        <span className="text-white text-2xl font-semibold">Performance Metrics</span>
      </div>

 
      <div className="flex flex-wrap gap-3 ml-8 mb-20">
        <WinnabilityC />
        <LossRatio />
        <PremiumGrowth />
        <ExposureDistribution />
      </div>

 
      <div className="absolute top-[20px] right-8 z-10">
        <AccountNeedsAttention />
      </div>

      <div className="mt-25">
        <div className="ml-8 mb-4 text-white text-3xl font-semibold">Policies</div>
        <PoliciesContainer />
      </div>

  
      <div className="flex gap-8 ml-10 mt-20">
        <div className="flex-[1]">
          <div className="text-white text-3xl font-semibold mb-4">Account Status</div>
          <div className="flex justify-center">
            <AccountStatus />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-3xl font-semibold">Compliance & Documentation</span>
            <a href="#" className="text-blue-400 text-xs hover:underline whitespace-nowrap">See history &rarr;</a>
          </div>
          <ComplianceDocs />
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-4 ml-8">
     
        <div className="mb-4">
          <span className="text-white text-3xl font-semibold">Account Details</span>
        </div>
        <div className="flex gap-8">
  
          <div>
            <DecisionSupportPanel />
            <div className="mt-12 ml-1 text-white text-base font-semibold flex items-center justify-between w-full">
              <span>RISK ASSESSMENT</span>
              <span className="bg-[#23263A] border border-[#44485c] rounded-full px-2 py-0.5 text-xs ml-2">6</span>
            </div>
            <div className="mt-6 ml-1 text-white text-base font-semibold flex items-center justify-between w-full">
              <span>DOCUMENTS AND COMPLIANCE</span>
              <span className="bg-[#23263A] border border-[#44485c] rounded-full px-2 py-0.5 text-xs ml-2">2</span>
            </div>
          </div>
     
          <div className="flex-1">
            <WinnabilityCard />
          </div>
        </div>
      </div>

   
      <div className="mt-20 h-[200] max-w-7x1 mx-25"style={{minHeight: "400px"}}>
        <CommunicationSection />
      </div>
      <div className="mt-20">
  <div className="text-white text-2xl font-semibold mb-4">Policies</div>
  <Policies />
</div>
    </div>
  );
}