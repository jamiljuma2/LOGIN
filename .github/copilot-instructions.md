Checklist

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements (React + Tailwind, Vite; Next.js acceptable but Vite used due to environment).
- [x] Scaffold the Project (Manually created Vite React TS + Tailwind project files in current directory).
- [x] Customize the Project (Implemented dashboards, components, pages per requirements).
- [x] Install Required Extensions (None required beyond defaults; skipped).
- [ ] Compile the Project (Run `npm install` then `npm run dev`).
- [ ] Create and Run Task (Optional; create tasks.json if desired to run `npm run dev`).
- [ ] Launch the Project (Run dev server after install; prompt for debug mode if needed).
- [x] Ensure Documentation is Complete (README added; this file cleaned of comments).

Execution Notes

- Use current workspace root as project root.
- All UI is frontend-only; backend placeholders provided in `src/lib/api.ts`.
- Payment placeholders use `triggerLipanaSTK({ phoneNumber, amount })` and modal.
- File upload component supports common formats and progress simulation.
