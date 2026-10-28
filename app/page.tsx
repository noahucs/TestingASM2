/**
 * File: app/page.tsx
 * Author: Member C (add your name)
 * Date: October 27, 2026
 * This file defines the application's only page.
 * It accepts no props and does not manage state.
 * Its purpose is to display the StudentPortal component.
 * The root layout adds the navigation and footer around it.
 */
import StudentPortal from "@/components/StudentPortal";

// Single home page
const Home = () => <StudentPortal />;

export default Home;
