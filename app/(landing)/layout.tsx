import { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar isDefault={true} />
      {children}
      <Footer />
    </>
  );
}
