import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import VoucherPage from "./pages/VoucherPage";
import UserManagement from "./components/userManagement/UserManagement";
import ReportingAndAnalytics from "./pages/ReportingAndAnalytics";
import ExamMangement from "./pages/ExamMangement";
import SupportPage from "./pages/SupportPage";
import Notifications from "./pages/Notifications";
import Proctoring from "./components/proctoringAI/Proctoring";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/voucher" element={<VoucherPage />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/exams" element={<ExamMangement />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/reports-analytics" element={<ReportingAndAnalytics />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/proctoring" element={<Proctoring />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
