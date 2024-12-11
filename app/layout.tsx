import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const slide_gravity = localFont({
  src: "./fonts/SlideGravity.woff2",
  variable: "--font-heading",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Slide",
  description: "A SaaS for automating your instagram engagement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            inter.variable,
            slide_gravity.variable,
            "font-sans antialiased bg-white text-black"
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
