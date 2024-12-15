import { Blocks, Gem, House, LucideIcon, Zap } from "lucide-react";
import Link from "next/link";
import { v4 as uuid } from "uuid";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

import { buttonVariants } from "./ui/button";

interface SidebarItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarCategory {
  category: string;
  items: SidebarItem[];
}

const SIDEBAR_ITEMS: SidebarCategory[] = [
  {
    category: "Overview",
    items: [{ id: uuid(), icon: House, label: "dashboard" }],
  },
  {
    category: "Features",
    items: [{ id: uuid(), icon: Zap, label: "automation" }],
  },
  {
    category: "Settings",
    items: [
      { id: uuid(), icon: Blocks, label: "integration" },
      { id: uuid(), icon: Gem, label: "upgrade" },
    ],
  },
];

export const Sidebar = ({ slug }: { slug: string }) => {
  return (
    <div className="flex z-20 flex-col space-y-4 h-full md:space-y-6">
      {/* logo */}
      <Link
        href="/"
        className="text-2xl font-bold tracking-wider uppercase font-heading md:h-auto"
      >
        Relink
      </Link>

      {/* navigation items */}
      <div className="flex-grow">
        <ul>
          {SIDEBAR_ITEMS.map(({ category, items }) => (
            <li key={category} className="mb-4 md:mb-8">
              <p className="text-xs font-medium leading-6 text-zinc-500">
                {category}
              </p>
              <div className="flex flex-col flex-1 -mx-2">
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={`/dashboard/${slug}/${item.label === "dashboard" ? "/" : item.label}`}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "w-full justify-start group flex items-center gap-x-2.5 px-2 py-1.5 text-sm font-medium leading-6 text-zinc-700 hover:bg-gray-50 transition capitalize rounded-none"
                    )}
                  >
                    <item.icon className="size-4 text-zinc-500 group-hover:text-zinc-700" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col">
        <hr className="my-4 w-full h-px bg-gray-100 md:my-6" />

        <UserButton
          showName
          appearance={{
            elements: {
              userButtonBox: "flex-row-reverse",
              userButtonTrigger:
                "focus:ring-0 focus:ring-offset-0 outline-none !ring-0 !outline-none",
            },
          }}
        />
      </div>
    </div>
  );
};
