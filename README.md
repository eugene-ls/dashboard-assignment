# Test Assignment: Dashboard & Account UI (React)

## Goal
A user interface for the Dashboard and Account screens was implemented based on provided screenshots. The main focus was on layout quality, component structure, state management, interactivity, code cleanliness, and responsiveness.

---

## Project Structure

```
my-dashboard-app/
├── public/
│   └── mock-data.json
├── src/
│   ├── components/
│   │   ├── Accounts/
│   │   │   ├── Communication/
│   │   │   │   ├── CommunicationSection.tsx
│   │   │   ├── Policies/
│   │   │   │   └── Policies.tsx
│   │   │   ├── Winnability/
│   │   │   │   ├── AIRecommendations.tsx
│   │   │   │   ├── DecisionSupportPanel.tsx
│   │   │   │   ├── DecreasingWinnability.tsx
│   │   │   │   ├── IncreasingWinnability.tsx
│   │   │   │   ├── WinnabilityCard.tsx
│   │   │   │   ├── WinnabilityHeader.tsx
│   │   │   │   ├── WinnabilityPosition.tsx
│   │   │   │   ├── WinnabilityScore.tsx
│   │   │   │   ├── WinnabilityTrend.tsx
│   │   │   ├── AccountHeaderInfo.tsx
│   │   │   ├── AccountNeedsAttention.tsx
│   │   │   ├── AccountPerfomance.tsx
│   │   │   ├── AccountStatus.tsx
│   │   │   ├── AccountStatusStep.tsx
│   │   │   ├── ComplianceDocs.tsx
│   │   │   ├── ExposureDistribution.tsx
│   │   │   ├── LossRatio.tsx
│   │   │   ├── PoliciesContainer.tsx
│   │   │   ├── PolicyCard.tsx
│   │   │   ├── PremiumGrowth.tsx
│   │   │   ├── WinnabilityC.tsx
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── Dashboard/
│   │   │   ├── MarketIntelligence.tsx
│   │   │   ├── MyAccounts.tsx
│   │   │   ├── PortfolioGoals.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   └── WorkQueue.tsx
│   │   ├── lAyout.tsx
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── Accounts.tsx
│   │   ├── Admin.tsx
│   │   ├── Brokers.tsx
│   │   ├── Dashboard.tsx
│   │   ├── GoalsRules.tsx
│   │   ├── Organizations.tsx
│   │   └── Submissions.tsx
│   ├── routes/
│   │   └── index.tsx
│   ├── styles/
│   │   └── tailwind.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── assets/
│   ├── index.css
│   ├── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── README.md
```

---

## Implemented Features

### 1. Dashboard (Main Screen)
- Navigation bar (active tab: "Dashboard")
- Work Queue block with tabs and table
- Portfolio Goals block with progress indicators
- Quick Actions block with buttons
- Market Intelligence block with news items
- My Accounts table with filters, triage, statuses, and color coding

### 2. Account Page
- Header with account name and general information
- Blocks:
  - Performance Metrics
  - Policies
  - Account Status & Compliance
  - Winnability (with charts and recommendations)
  - Communication (messages, attachments, replies)
  - Policies Table (bottom section)

---

## Key Features
- React + Vite
- TypeScript
- Tailwind CSS
- Small, reusable components
- Mock data (JSON)
- Responsive design for desktop and tablet
- Basic interactivity:
  - Tab switching
  - Highlighting active states
  - Displaying additional information on icon click

---

## Technologies Used
- React (Vite)
- TypeScript
- Tailwind CSS
- Mock data (JSON)

---

## AI/No-code Tools Used
- GitHub Copilot — assisted with routine tasks and component generation
- ChatGPT — provided a step-by-step roadmap and advice on architecture and responsiveness


---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

