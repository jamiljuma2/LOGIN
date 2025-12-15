
# Copilot/AI Agent Instructions for Assignment Connect UI

## Project Overview
- **Frontend-only** React (Vite + TypeScript) + TailwindCSS app for connecting students and writers.
- No backend: all data flows use mock APIs in `src/lib/api.ts` and `src/lib/mockData.ts`.
- Three main dashboard roles: **Admin**, **Student**, **Writer**. Each has a dedicated layout and page set.
- Payment and file upload flows are simulated (see below).

## Key Patterns & Conventions
- **Routing:** All navigation is via React Router, defined in `src/App.tsx`.
- **Layouts:** Role-based layouts in `src/layouts/` wrap dashboard pages and inject sidebars.
- **UI Components:** Shared UI in `src/components/` (e.g., `Modal`, `ToastProvider`, `Sidebar`, `FileUpload`).
- **State:** All state is local (React hooks); no global state management or context except for toasts.
- **Mock Data:** All business logic and data (assignments, tasks, users, payments) are in `src/lib/mockData.ts` and `src/lib/withdrawals.ts`.
- **API Simulation:** Use `mockFetch` and `triggerLipanaSTK` for async flows. Replace with real API calls for backend integration.
- **Payments:** M-Pesa STK Push is simulated via `triggerLipanaSTK` and `STKPushModal`. No real payment integration.
- **File Upload:** `FileUpload` supports drag-and-drop, progress simulation, and previews. Accepts common doc/image formats.
- **Toasts:** Use `useToast()` from `ToastProvider` for user feedback.

## Developer Workflows
- **Install:** `npm install`
- **Run Dev Server:** `npm run dev` (Vite, default port 5173)
- **No tests or build scripts** are present; focus is on UI/UX flows.
- **No backend/server**—all API endpoints are placeholders.

## Integration Points
- **To add real backend:**
	- Replace functions in `src/lib/api.ts` and `src/lib/withdrawals.ts` with real API calls.
	- Wire up authentication, payments, and data fetches to backend endpoints.
- **Payments:** Integrate real M-Pesa STK Push via backend at `/api/transactions/push-stk`.

## Project Structure Highlights
- `src/pages/`: All route pages, grouped by role (admin, student, writer, auth).
- `src/layouts/`: Dashboard layouts for each role.
- `src/components/`: Shared UI components.
- `src/lib/`: Mock data and API simulation.

## Examples
- **Simulate payment:** `await triggerLipanaSTK({ phoneNumber, amount })`
- **Show toast:** `useToast().showToast({ type: 'success', message: '...' })`
- **Upload files:** Use `<FileUpload onSubmit={...} />` and handle files in callback.

## Special Notes
- **Do not add backend logic** or real API calls unless explicitly requested.
- **Preserve role-based layouts and navigation structure.**
- **All business logic is UI-only and should remain so unless integrating a backend.**
