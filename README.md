# 📈 Signalist — AI-Powered Stock Market Platform

Signalist is a modern, AI-powered stock market platform built with **Next.js, TypeScript, MongoDB, Better Auth, Inngest, and Finnhub**.

It provides real-time stock data, interactive market charts, personalized watchlists, alerts, company insights, financial news, and AI-powered market summaries.

The platform also includes an admin dashboard for managing stocks, publishing financial news, and monitoring user activity. Event-driven workflows automate alerts, earnings notifications, daily AI digests, and sentiment analysis.

> 🚀 Built as a full-stack financial platform combining real-time market data, authentication, background workflows, and AI-powered insights.

---

## ✨ Features

### 📊 Stock Dashboard
- Real-time stock prices and market information
- Interactive stock charts
- Historical price data
- Company financial information
- Market capitalization and valuation metrics
- Price and percentage change tracking

### 🔎 Powerful Stock Search
- Search stocks by symbol or company name
- Quickly discover popular stocks
- Search results with watchlist status
- Direct navigation to detailed stock pages

### ⭐ Watchlist
- Create a personalized stock watchlist
- Add and remove stocks easily
- Track current prices and market changes
- View important stock metrics in one place

### 🔔 Stock Alerts
- Configure personalized stock alerts
- Monitor price movements and market conditions
- Automated alert processing
- Email notifications when configured conditions are met

### 🏢 Company Insights
Explore detailed information about individual companies, including:

- Current stock price
- Price changes
- Market capitalization
- P/E ratio
- Financial metrics
- Company information
- Financial news
- Market sentiment

### 🤖 AI-Powered Insights
- AI-generated market summaries
- Personalized daily market digests
- AI-assisted financial insights
- Earnings-related notifications
- Sentiment analysis
- Automated market reporting

### ⚡ Event-Driven Workflows

Powered by **Inngest**, Signalist uses background workflows for:

- Automated stock alerts
- Scheduled notifications
- Earnings notifications
- Daily market digests
- AI-powered workflows
- Background financial processing

### 📰 Financial News
- Latest market and company news
- Company-specific news
- Aggregated financial information
- Automated news processing

### 👨‍💼 Admin Dashboard
Administrative functionality for:

- Managing stock-related content
- Publishing financial news
- Monitoring user activity
- Viewing platform analytics
- Managing application data

### 📧 Email Notifications
Transactional and automated emails powered by **Nodemailer** for:

- Stock alerts
- Market notifications
- Earnings updates
- AI-generated reports
- User-related notifications

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | Full-stack React framework |
| **TypeScript** | Type-safe application development |
| **Tailwind CSS** | Responsive and utility-first styling |
| **shadcn/ui** | Accessible and customizable UI components |
| **Better Auth** | Authentication and session management |
| **MongoDB** | Application database |
| **Mongoose** | MongoDB object modeling |
| **Finnhub** | Real-time financial market data |
| **Inngest** | Event-driven workflows and background jobs |
| **Nodemailer** | Email delivery |
| **Gemini** | AI-powered market insights and summaries |
| **TradingView** | Interactive financial charts |
| **Radix UI** | Accessible UI primitives |
| **Sonner** | Toast notifications |
| **CodeRabbit** | AI-powered code reviews |

---

## 🏗️ Architecture

Signalist follows a modern Next.js full-stack architecture.

```text
                         ┌─────────────────────┐
                         │      Signalist      │
                         │     Next.js App     │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
       │ Better Auth │       │   Finnhub   │       │ TradingView │
       │             │       │ Market Data │       │   Charts    │
       └──────┬──────┘       └─────────────┘       └─────────────┘
              │
              ▼
       ┌─────────────┐
       │   MongoDB   │
       │  + Mongoose │
       └──────┬──────┘
              │
              ▼
       ┌─────────────┐
       │   Inngest   │
       │  Workflows  │
       └──────┬──────┘
              │
        ┌─────┴─────┐
        ▼           ▼
   ┌─────────┐  ┌─────────┐
   │ Gemini  │  │Nodemailer│
   │   AI    │  │  Email  │
   └─────────┘  └─────────┘

---
## 🔐 Authentication

Authentication and session management are handled using Better Auth.

The application supports:

• User registration
• Email/password authentication
• Session management
• Protected routes
• User-specific watchlists
• Server-side session validation


## 🤖 AI Workflow

AI capabilities are integrated into the platform to transform financial data into easier-to-understand insights.

Example:

Market Data
     │
     ▼
Financial Information
     │
     ▼
AI Processing
     │
     ├── Market Summary
     ├── Sentiment Analysis
     ├── Daily Digest
     └── Earnings Insights


