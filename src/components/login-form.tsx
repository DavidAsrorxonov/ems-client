import type { ILoginForm } from "@/types/login-form";

const LoginForm = ({ role, title, subtitle }: ILoginForm) => {
  return (
    <div>
      {role} {title} {subtitle}
    </div>
  );
};

export default LoginForm;
