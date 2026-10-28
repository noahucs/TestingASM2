/**
 * File: components/StudentCard.tsx
 * Author: Member B (add your name)
 * Date: October 27, 2026
 * This component displays information for one student.
 * Its props provide the student and a removal callback.
 * Local state controls whether this student's details are visible.
 * It outputs the student's name, grade, detail toggle and remove button.
 */
"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // Each card manages its own details toggle
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-lg font-semibold text-slate-900">
        {student.firstName} {student.lastName}
      </h3>
      <p className="mt-1 text-sm text-slate-600">Grade {student.grade}</p>

      {showDetails && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
          <p>Average: {student.average}%</p>
          {student.average >= 80 && (
            <span className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-900">
              Honour roll
            </span>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" onClick={() => setShowDetails(!showDetails)} className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button type="button" onClick={() => onRemove(student.id)} className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
          Remove
        </button>
      </div>
    </article>
  );
};

export default StudentCard;
