/**
 * File: components/StudentList.tsx
 * Author: Member B (add your name)
 * Date: October 27, 2026
 * This component displays the students passed from its parent.
 * It receives a list of students and a remove callback as props.
 * It uses map to create one StudentCard per student with a unique key.
 * When no students match, it displays a helpful empty message.
 */
import type { Student } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {
  // Empty and populated list views
  if (students.length === 0) {
    return <p className="rounded-xl bg-white p-6 text-slate-600 ring-1 ring-slate-200">No students to show.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default StudentList;
