import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner.tsx";
import LoginLanding from "./pages/login-landing.tsx";
import Layout from "./pages/layout.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Employees from "./pages/employees.tsx";
import Attendance from "./pages/attendance.tsx";
import Leave from "./pages/leave.tsx";
import Payslips from "./pages/payslips.tsx";
import Settings from "./pages/settings.tsx";
import PrintPayslip from "./pages/print-payslip.tsx";
import LoginForm from "./components/login-form.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Toaster position="top-center" />
    <Routes>
      <Route path="/login" element={<LoginLanding />} />
      <Route
        path="/login/admin"
        element={
          <LoginForm
            role="admin"
            title="Admin Portal"
            subtitle="Sign in to manage the organization"
          />
        }
      />
      <Route
        path="/login/employee"
        element={
          <LoginForm
            role="employee"
            title="Employee Portal"
            subtitle="Sign in to access your account"
          />
        }
      />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/payslips" element={<Payslips />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/print/payslips/:id" element={<PrintPayslip />} />

      <Route path="*" element={<Navigate to={"/dashboard"} replace />} />
    </Routes>
  </BrowserRouter>,
);
