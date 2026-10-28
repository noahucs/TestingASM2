/**
 * File: data/students.ts
 * Author: Member B (add your name)
 * Date: October 27, 2026
 * This file defines the shared Student interface for the portal.
 * It contains the starting student records used by StudentPortal.
 * Each record includes an ID, first and last name, grade, and average.
 * The exported array provides the initial list shown on the page.
 */

// Student model shared across components
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// Starting student records
export const students: Student[] = [
  { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 12, average: 91 },
  { id: 2, firstName: "Lucas", lastName: "Nguyen", grade: 9, average: 75 },
  { id: 3, firstName: "Maya", lastName: "Patel", grade: 10, average: 86 },
  { id: 4, firstName: "Ethan", lastName: "Brown", grade: 11, average: 72 },
  { id: 5, firstName: "Sophia", lastName: "Chen", grade: 12, average: 84 },
  { id: 6, firstName: "Noah", lastName: "Wilson", grade: 9, average: 68 },
  { id: 7, firstName: "Ava", lastName: "Martin", grade: 10, average: 79 },
  { id: 8, firstName: "Omar", lastName: "Hassan", grade: 11, average: 93 },
];
