# Assignment Connect UI (Frontend Only)

A complete, frontend-only web application for connecting students and writers for assignment services. Built with React (Vite) and TailwindCSS. Includes guest landing page, authentication UI, and full dashboards for Writer, Student, and Admin, with modals, toasts, loading states, file uploads, and M-Pesa Lipana STK push placeholders.

## Stack
- React + TypeScript (Vite)
- TailwindCSS
- React Router

## Features
- Authentication UI: Login, Register (role select), Forgot Password, Email Verification placeholder
- Writer Dashboard: Subscription, Available Tasks, My Tasks (tabs), Upload Completed Work, Earnings, Ratings & Badge, Settings
- Student Dashboard: Post Assignment (file upload + form), My Assignments (tabs), Wallet (STK modal), Notifications, Settings
- Admin Dashboard: Overview, Assignments review, Submissions review, Payments, Users, Ratings, Settings
- Payment Placeholder: STK Push modal simulation via `triggerLipanaSTK({ phoneNumber, amount })`
- File Upload: Drag-and-drop, progress bar, previews
- Global UI: Navbar (guest), Sidebar (dashboards), Modal, Toasts, Badge, ProgressBar

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run the dev server
```bash
npm run dev
```
Open the URL printed in the terminal (typically http://localhost:5173).

## Project Structure
- `src/App.tsx`: Router and top-level layout
- `src/components/*`: Reusable UI components (Modal, Toasts, Sidebar, FileUpload, etc.)
- `src/layouts/*`: Dashboard layouts (Writer, Student, Admin)
- `src/pages/*`: All pages for landing, auth, writer, student, admin
- `src/lib/api.ts`: Mock API functions including `triggerLipanaSTK`
- `src/lib/mockData.ts`: Mock sample data

## Backend Integration Notes
- Replace mock functions in `src/lib/api.ts` with real API calls
- Wire subscription limits and tasks to backend APIs
- Authentication screens currently simulate success; connect to real auth endpoints
- Payment buttons call `triggerLipanaSTK` placeholder; integrate Lipana M-Pesa STK Push via backend `POST /api/transactions/push-stk`

## License
Frontend-only demo for integration testing. No backend provided.
