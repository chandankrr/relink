import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { ClerkProvider } from "@clerk/nextjs";

const relink_gravity = localFont({
  src: "./fonts/RelinkGravity.woff2",
  variable: "--font-heading",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Relink",
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
            relink_gravity.variable,
            "font-sans antialiased bg-white text-black"
          )}
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
