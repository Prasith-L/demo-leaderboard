# F1 Leaderboard 🏎️

Responsive and animated F1 Leaderboard web application built with React, TypeScript, and Vite.

## Features ✨

- **Dynamic Leaderboard:** Automatically sorts participants by their best lap time.
- **Add New Entries:** Interactive modal form to add new drivers with custom team colors.
- **Real-time Form Validation:** Time input is strictly validated (seconds <= 59, ms <= 999) with seamless UX.
- **Responsive Design:** Fully optimized for both mobile and desktop screens using Tailwind CSS.
- **Smooth Animations:** Beautiful scroll-reveal animations using GSAP and WebGL background via Three.js.

## Tech Stack 🛠️

- **Framework:** React 19 + Vite
- **Language:** TypeScript 6
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP (`tw-animate-css`) + React Three Fiber (WebGL)

## Getting Started 🚀

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure 📁

- `src/components/` — UI Components (LeaderBoard, AddEntryModal, LeaderBoardRow)
- `src/hooks/` — Custom React hooks for separating business logic (`useEntryForm`)
- `src/lib/` — Utility functions (`leaderboardUtils`)
- `src/types/` — TypeScript interfaces and type definitions
- `src/data/` — Mock data used for initial rendering
