# Navbar, Footer & StatsPanel — local practice project

This is a **separate practice project** for Assignment 1. It does not change your group's GitHub repository.

## Files you should edit

- `components/NavBar.tsx` — school title and same-page links
- `components/Footer.tsx` — school contact information
- `components/StatsPanel.tsx` — total students, honour roll (average >= 80), and grade 12 count

`app/layout.tsx` connects the navbar and footer. `app/page.tsx` is only a temporary preview/testing page; **don't copy that page into your teammates' project**. `data/students.ts` provides sample data for testing.

## Run it in VS Code

1. Extract the ZIP, then open its folder in VS Code.
2. Open **Terminal > New Terminal**.
3. Run `npm install` (first time only).
4. Run `npm run dev`.
5. Visit `http://localhost:3000` in your browser.

The buttons on the preview page change the sample student array to test `StatsPanel`. Check the Navbar's section links and the Footer at the bottom. Test on a narrow browser window too.

## Move your finished work into your branch

Copy only `components/NavBar.tsx`, `components/Footer.tsx`, and `components/StatsPanel.tsx` into the matching `components/` folder on your GitHub branch. Coordinate with your group before changing `app/layout.tsx`; it must import both Navbar and Footer. Replace the author placeholders with your real name, and update dates/descriptions to reflect your own work. Commit your components separately from your own account.

This project uses Next.js, TypeScript, and Tailwind through npm, **not** the Tailwind CDN.
