/**
 * File: app/layout.tsx
 * Author: Member A (add your name)
 * Date: October 27, 2026
 * This root layout surrounds the page with shared navigation and footer.
 * Its children prop contains the page content provided by Next.js.
 * It imports global Tailwind styling and the two shared components.
 * The output is the common structure for the single-page app.
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Generation High School | Student Portal",
  description: "Student portal for New Generation High School",
};

// Shared page shell
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
