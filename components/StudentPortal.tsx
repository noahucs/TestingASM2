/**
 * File: components/StudentPortal.tsx
 * Author: Member C (add your name)
 * Date: October 27, 2026
 * This component manages the student list and search text in state.
 * It starts with the records provided by data/students.ts.
 * It filters names, adds new students, removes students, and clears the list.
 * It passes data and callbacks to the smaller portal components.
 */
"use client";

import { useState } from "react";
import { students as startingStudents } from "@/data/students";
import type { Student } from "@/data/students";
import StatsPanel from "./StatsPanel";
import SearchBox from "./SearchBox";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

const StudentPortal = () => {
  // The main list and the search text live here
  const [students, setStudents] = useState<Student[]>(startingStudents);
  const [searchText, setSearchText] = useState("");

  // Student list actions: always create a new array
  const removeStudent = (id: number) => {
    setStudents((current) => current.filter((student) => student.id !== id));
  };

  const addStudent = (student: Omit<Student, "id">) => {
    setStudents((current) => {
      const nextId = current.reduce((highest, item) => Math.max(highest, item.id), 0) + 1;
      return [...current, { ...student, id: nextId }];
    });
  };

  const clearAll = () => setStudents([]);

  // Filter only the displayed cards, not the whole-list statistics
  const visibleStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchText.toLowerCase().trim())
  );

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-12 px-6 py-10">
      <section id="overview" className="scroll-mt-6 space-y-5">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Student Portal</h1>
          <p className="mt-2 text-slate-600">View and manage students at New Generation High School.</p>
        </div>
        <StatsPanel students={students} />
      </section>

      <section id="students" className="scroll-mt-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">Students</h2>
          <button type="button" onClick={clearAll} className="rounded-lg border border-red-200 bg-white px-4 py-2 font-medium text-red-700 hover:bg-red-50">Clear all</button>
        </div>
        <SearchBox searchText={searchText} onSearchChange={setSearchText} />
        <StudentList students={visibleStudents} onRemove={removeStudent} />
      </section>

      <section id="add-student" className="scroll-mt-6 space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">Add a student</h2>
        <AddStudent onAdd={addStudent} />
      </section>
    </main>
  );
};

export default StudentPortal;
