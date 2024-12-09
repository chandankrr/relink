"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Icons } from "./icons";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#" },
  { label: "FAQs", href: "#" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={cn(
        "flex fixed top-0 right-0 left-0 z-30 items-center h-16 bg-white transition-all duration-300 ease-in-out md:h-20 lg:h-32",
        isScrolled ? "shadow-sm lg:h-20" : ""
      )}
    >
      <div className="px-4 w-full lg:px-6">
        <div className="grid grid-cols-2 items-center lg:grid-cols-3 border-white/15 md:pr-2">
          <Link href="/">
            <Icons.logo className="w-auto h-9 md:h-auto" />
          </Link>
          <div className="hidden justify-center items-center lg:flex">
            <nav className="flex gap-6 text-sm uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="tracking-widest"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 justify-end">
            <Icons.menu />
            <Button
              variant="secondary"
              className="hidden items-center tracking-widest lg:inline-flex"
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button
              variant="primary"
              className="hidden items-center tracking-widest lg:inline-flex"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
