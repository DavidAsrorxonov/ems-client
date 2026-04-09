import type { IPortalOptions } from "@/types/portal-options";
import { LogIn, ShieldIcon } from "lucide-react";

export const portalOptions: IPortalOptions[] = [
  {
    to: "/login/admin",
    title: "Admin Portal",
    description:
      "Manage employees, departments, payroll, and system configurations.",
    icon: ShieldIcon,
  },
  {
    to: "/login/employee",
    title: "Employee Portal",
    description:
      "View your profile, track attendance, request time off, and access payslips.",
    icon: LogIn,
  },
];
