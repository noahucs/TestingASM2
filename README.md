# New Generation High School — Student Portal

A **working single-page preview** of the SAIT Assignment 1 requirements, made to replace the earlier instructions-only practice page. This is a separate local project: it does not edit or push to your group's GitHub repository.

## Run locally (Windows PowerShell / VS Code)

1. Extract the ZIP and open the project folder (the folder containing `package.json`) in VS Code.
2. Open Terminal > New Terminal.
3. Run `npm.cmd install` once in this project folder.
4. Run `npm.cmd run dev`.
5. Visit http://localhost:3000.

## What you should see

- A school navigation bar with links to Overview, Students, and Add a student.
- Three live summary panels: Students, Honour roll, and Graduating.
- A searchable grid of eight student cards. Each card can expand independently and remove a student.
- An Add student area with four inputs and a button.
- A Clear all button that resets the visible list and counters to zero.
- The school contact footer at the bottom.

## Division of work / integration

- **Member A:** `components/NavBar.tsx`, `components/Footer.tsx`, `components/StatsPanel.tsx`, `app/layout.tsx`, overall styling.
- **Member B:** `data/students.ts`, `components/StudentList.tsx`, `components/StudentCard.tsx`.
- **Member C:** `components/StudentPortal.tsx`, `components/SearchBox.tsx`, `components/AddStudent.tsx`.

**Only copy your own three assigned component files into your group's branch** after coordinating names and props with teammates. Do not overwrite your teammates' files or blindly replace their `app/page.tsx` or `app/layout.tsx`.

The school contact details and student records are fictional sample content. File comments still contain author placeholders; each contributor should edit the comments to describe their own work and enter their own name and date.

## Test checklist (to perform in browser; record results honestly)

| # | Manual test | Result |
|---|---|---|
| 1 | Open app: eight students and correct stats | Not tested |
| 2 | Show/hide one card; other cards stay closed | Not tested |
| 3 | Remove a grade 12 student: both total and graduating fall | Not tested |
| 4 | Search `AHMED`, then clear search | Not tested |
| 5 | Search `zzz`: empty message, unchanged stats | Not tested |
| 6 | Blank first name + filled last name: nothing added | Not tested |
| 7 | Add student; fields reset to blank/9/70 and stats update | Not tested |
| 8 | Clear all: empty list, stats all zero | Not tested |
| 9 | Phone width: one card per row, no horizontal overflow | Not tested |
| 10 | Navbar links jump to the correct sections | Not tested |

Before submission your group must include actual member contributions, GitHub repository and deployed links, and completed real-world test results. Don't record Pass for tests you haven't run.
