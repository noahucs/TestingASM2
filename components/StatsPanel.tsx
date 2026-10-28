/**
 * File: components/StatsPanel.tsx
 * Author: Member A (add your name)
 * Date: October 27, 2026
 * This component shows three summary numbers for the school.
 * It receives the full student list as a prop.
 * It counts all students, honour roll students, and grade 12 students.
 * The summary updates whenever its parent passes an updated list.
 */
import type { Student } from "@/data/students";

interface StatsPanelProps {
  students: Student[];
}

const StatsPanel = ({ students }: StatsPanelProps) => {
  // Calculate statistics from the entire list, not search results
  const honourRoll = students.filter((student) => student.average >= 80).length;
  const graduating = students.filter((student) => student.grade === 12).length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm text-slate-600">Students</p>
        <p className="mt-2 text-3xl font-bold text-slate-900">{students.length}</p>
      </div>
      <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm text-slate-600">Honour roll</p>
        <p className="mt-2 text-3xl font-bold text-slate-900">{honourRoll}</p>
      </div>
      <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm text-slate-600">Graduating (Grade 12)</p>
        <p className="mt-2 text-3xl font-bold text-slate-900">{graduating}</p>
      </div>
    </div>
  );
};

export default StatsPanel;
