import React from "react";

import { Navbar } from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar isDefault={false} />
      <div className="mt-16 h-[calc(100vh-64px)] flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
