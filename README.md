# My Dashboard App

This is a React application built with Vite, utilizing Tailwind CSS for styling and React Router for navigation. The application is designed to provide a comprehensive dashboard experience for users, featuring various components and pages.

## Technologies Used

- **React** (Vite)
- **Tailwind CSS**
- **React Router**
- **Mock JSON**
- **Vercel** (for deployment)

## Project Structure

```
my-dashboard-app
├── public
│   └── mock-data.json
├── src
│   ├── assets
│   ├── components
│   │   ├── Dashboard
│   │   │   ├── WorkQueue.tsx
│   │   │   ├── PortfolioGoals.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   ├── MarketIntelligence.tsx
│   │   │   └── MyAccounts.tsx
│   │   └── common
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   ├── layouts
│   │   └── MainLayout.tsx
│   ├── pages
│   │   ├── Dashboard.tsx
│   │   ├── Accounts.tsx
│   │   ├── Brokers.tsx
│   │   ├── Submissions.tsx
│   │   ├── Organizations.tsx
│   │   ├── GoalsRules.tsx
│   │   └── Admin.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── routes
│   │   └── index.tsx
│   ├── styles
│   │   └── tailwind.css
│   └── types
│       └── index.ts
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-dashboard-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

This application is deployed on Vercel. You can access the live version at `<your-vercel-deployment-url>`.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.