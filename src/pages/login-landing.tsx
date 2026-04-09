import LoginLeftSide from "@/components/login-left-side";

const LoginLanding = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div></div>
      </div>
    </div>
  );
};

export default LoginLanding;
