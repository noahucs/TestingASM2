/**
 * File: components/SearchBox.tsx
 * Author: Member C (add your name)
 * Date: October 27, 2026
 * This component displays a search field for student names.
 * Its props supply the current search text and an update callback.
 * The input sends each change back to StudentPortal.
 * The portal then determines which students to display.
 */
"use client";

interface SearchBoxProps {
  searchText: string;
  onSearchChange: (value: string) => void;
}

const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  return (
    <div className="max-w-md">
      <label htmlFor="student-search" className="mb-2 block text-sm font-medium text-slate-700">Search by name</label>
      <input id="student-search" type="text" value={searchText} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search students..." className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600" />
    </div>
  );
};

export default SearchBox;
