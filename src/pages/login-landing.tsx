import LoginLeftSide from "@/components/login-left-side";

const LoginLanding = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-fade-in relative z-10">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">
              Welcome back!
            </h2>
            <p className="text-slate-500">
              Select your portal to securely access the system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
