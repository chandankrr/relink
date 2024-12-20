"use client";

import { format } from "date-fns";
import { Calendar, Pencil, Search, Trash2 } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { usePaths } from "@/hooks/use-path";
import { useQueryAutomations } from "@/hooks/use-queries";
import { cn } from "@/lib/utils";

import { EmptyAutomationState } from "./empty-automation-state";

export const AutomationPageContent = () => {
  const { data } = useQueryAutomations();
  const { pathname } = usePaths();

  // WIP: Implement search functionality

  // Empty state for no automation
  if (data?.status !== 200 || data?.data?.length <= 0) {
    return <EmptyAutomationState />;
  }

  return (
    <div>
      {/* Search */}
      <div className="flex flex-row gap-6 mb-6">
        <div className="flex flex-row flex-1 gap-2 items-center px-2 h-11 bg-white rounded-md border">
          <Search className="text-gray-400 size-5" />
          <Input
            placeholder="Search automations..."
            className="rounded-none border-none shadow-none outline-none focus-visible:ring-0"
          />
        </div>
        <Button variant="outline" className="h-11 shadow-none">
          Search
        </Button>
      </div>
      <Card>
        <h4 className="mb-4 text-lg font-semibold">Your Automations</h4>

        {/* Animations list */}
        <div className="divide-y">
          {data.data.map((automation) => (
            <div
              key={automation.id}
              className="flex flex-col gap-4 justify-between py-4 sm:flex-row sm:items-start"
            >
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap gap-2 items-center">
                  <h3 className="font-medium">{automation.name}</h3>
                  {automation.listener?.listener === "SMARTAI" ? (
                    <Badge variant="secondary">Smart AI</Badge>
                  ) : (
                    <Badge>Standard</Badge>
                  )}
                </div>
                <p className="max-w-lg text-sm text-gray-500 dark:text-gray-400 text-pretty line-clamp-1 text-ellipsis">
                  {automation.description}
                </p>

                {/* keywords for automation */}
                <div className="flex flex-wrap gap-x-2">
                  {automation.keywords.length > 0 ? (
                    automation.keywords.map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={cn(
                          (index + 1) % 1 === 0 &&
                            "bg-[#2fe699]/15 border-[#2fe699]",
                          (index + 1) % 2 === 0 &&
                            "bg-[#7c21d6]/15 border-[#7c21d6]",
                          (index + 1) % 3 === 0 &&
                            "bg-[#e1ce26]/15 border-[#e1ce26]",
                          (index + 1) % 4 === 0 &&
                            "bg-[#eb441f]/15 border-[#eb441f]"
                        )}
                      >
                        {keyword.word}
                      </Badge>
                    ))
                  ) : (
                    <Badge variant="dash">no keywords</Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 !mt-2">
                  <Calendar className="size-3" />
                  <span>
                    {format(new Date(automation.createdAt), "MMMM do yyyy")}
                  </span>
                </div>
              </div>

              {/* Action button */}
              <div className="flex gap-4 items-center">
                {/* WIP: Implement activation logic */}
                <Switch
                  className="data-[state=checked]:bg-[#aae0a5]"
                  checked
                  aria-label="Toggle automation"
                />

                <Link
                  href={`${pathname}/${automation.id.slice(0, 8)}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <Pencil className="size-4" />
                </Link>

                {/* WIP: Implement functionality to delete automation */}
                <Button variant="ghost" size="icon" className="group">
                  <Trash2 className="size-4 group-hover:text-red-600" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
