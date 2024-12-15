"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useClerk, useUser } from "@clerk/nextjs";

import { Icons } from "./icons";
import { Button, buttonVariants } from "./ui/button";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#" },
  { label: "FAQs", href: "#" },
];

export const Navbar = ({ isDefault }: { isDefault: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

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
        "flex fixed top-0 right-0 left-0 z-30 items-center h-16 bg-white transition-all duration-300 ease-in-out md:h-20",
        isDefault ? "lg:h-32" : "shadow-sm lg:h-20",
        isScrolled ? "shadow-sm lg:h-20" : ""
      )}
    >
      <div className="px-4 w-full lg:px-6">
        <div
          className={cn(
            "grid grid-cols-2 items-center border-white/15 md:pr-2",
            isDefault ? "lg:grid-cols-3" : "lg:grid-cols-2"
          )}
        >
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-wider uppercase md:text-3xl font-heading md:h-auto"
            >
              Relink
            </Link>
          </div>
          {isDefault && (
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
          )}
          <div className="flex gap-4 justify-end">
            <Icons.menu />
            {user ? (
              <>
                <Button
                  className="hidden px-6 h-12 text-base font-light tracking-wider uppercase bg-transparent rounded-full border-red-600 shadow-none lg:inline-flex hover:bg-transparent"
                  variant="outline"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "hidden px-6 h-12 text-base font-light tracking-wider uppercase rounded-full shadow-none bg-button_primary border-button_primary lg:inline-flex hover:bg-button_primary"
                  )}
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "hidden px-6 h-12 text-base font-light tracking-wider uppercase rounded-full shadow-none border-button_primary lg:inline-flex hover:bg-transparent"
                  )}
                  href="/sign-in"
                >
                  Sign In
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "hidden px-6 h-12 text-base font-light tracking-wider uppercase rounded-full shadow-none bg-button_primary border-button_primary lg:inline-flex hover:bg-button_primary"
                  )}
                  href="/sign-up"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
