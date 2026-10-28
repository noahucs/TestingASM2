/**
 * File: app/page.tsx
 * Author: Practice preview (not a component to submit)
 * Date: October 28, 2026
 * This page exists only so you can test your three assigned components.
 * It displays sample students and a StatsPanel preview.
 * Buttons add, remove, and reset sample students to check the live counts.
 * The Navbar and Footer are provided automatically by app/layout.tsx.
 */
"use client";

import { useState } from "react";
import StatsPanel from "@/components/StatsPanel";
import { students as initialStudents, type Student } from "@/data/students";

const Home = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const removeStudent = () => setStudents((current) => current.slice(0, -1));
  const addStudent = () => setStudents((current) => [
    ...current,
    { id: Math.max(0, ...current.map((s) => s.id)) + 1, firstName: "Test", lastName: "Student", grade: 12, average: 85 },
  ]);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-6 py-10">
      <section id="overview" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <p className="text-sm text-slate-600">This is a separate practice project for your Navbar, Footer, and StatsPanel.</p>
        <StatsPanel students={students} />
      </section>

      <section id="students" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Test the statistics</h2>
        <p className="text-sm text-slate-600">Use these buttons to check that all three stats react to changes in the student list.</p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={addStudent} className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Add test student</button>
          <button type="button" onClick={removeStudent} disabled={students.length === 0} className="rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-700 disabled:opacity-50">Remove last student</button>
          <button type="button" onClick={() => setStudents([])} className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-800 hover:bg-slate-100">Clear all</button>
          <button type="button" onClick={() => setStudents(initialStudents)} className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-800 hover:bg-slate-100">Reset</button>
        </div>
        <p className="text-sm text-slate-500">Current sample records: {students.length}</p>
      </section>

      <section id="add-student" className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">Add a student</h2>
        <p className="text-sm text-slate-600">This section is a placeholder so you can test the Navbar link. The real AddStudent component belongs to your teammate.</p>
      </section>
    </main>
  );
};

export default Home;
