/**
 * File: components/AddStudent.tsx
 * Author: Member C (add your name)
 * Date: October 27, 2026
 * This component provides four controlled inputs to add a student.
 * Its onAdd prop passes the new student's details to StudentPortal.
 * Empty names prevent an addition, and numeric inputs have starting values.
 * After adding, the inputs reset to their original values.
 */
"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

interface AddStudentProps {
  onAdd: (student: Omit<Student, "id">) => void;
}

const AddStudent = ({ onAdd }: AddStudentProps) => {
  // Controlled input state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(9);
  const [average, setAverage] = useState(70);

  // Button click handler (no form or onSubmit in this assignment)
  const addStudent = () => {
    if (firstName.trim() === "" || lastName.trim() === "") return;
    if (grade < 9 || grade > 12 || average < 0 || average > 100) return;

    onAdd({ firstName: firstName.trim(), lastName: lastName.trim(), grade, average });
    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="mb-1 block text-sm font-medium">First name</label>
          <input id="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="last-name" className="mb-1 block text-sm font-medium">Last name</label>
          <input id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="grade" className="mb-1 block text-sm font-medium">Grade</label>
          <input id="grade" type="number" min="9" max="12" value={grade} onChange={(event) => setGrade(Number(event.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="average" className="mb-1 block text-sm font-medium">Average</label>
          <input id="average" type="number" min="0" max="100" value={average} onChange={(event) => setAverage(Number(event.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
        </div>
      </div>
      <button type="button" onClick={addStudent} className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700">Add student</button>
    </div>
  );
};

export default AddStudent;
