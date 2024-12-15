import { Navbar } from "@/components/navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar isDefault={false} />
      <div className="mt-16 h-[calc(100vh-64px)] bg-gray-50 flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
