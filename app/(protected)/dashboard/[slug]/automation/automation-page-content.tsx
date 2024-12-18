import { Calendar, Pencil, Search, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export const AutomationPageContent = () => {
  // WIP: Get all automatins
  // WIP: Implement search functionality

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
          {/* WIP: Add dynamic data */}
          {/* 1st animation */}
          <div className="flex flex-col gap-4 justify-between py-4 sm:flex-row sm:items-start">
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap gap-2 items-center">
                <h3 className="font-medium">Send Research PDF</h3>
                <Badge variant="secondary">Smart AI</Badge>
              </div>
              <p className="max-w-lg text-sm text-gray-500 dark:text-gray-400 text-pretty line-clamp-1 text-ellipsis">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet hic temporibus nemo.
              </p>
              <div className="flex flex-wrap gap-x-2">
                <Badge
                  variant="outline"
                  className={cn(
                    (0 + 1) % 1 === 0 && "bg-[#2fe699]/15 border-[#2fe699]",
                    (1 + 1) % 2 === 0 && "bg-[#7c21d6]/15 border-[#7c21d6]",
                    (2 + 1) % 3 === 0 && "bg-[#e1ce26]/15 border-[#e1ce26]",
                    (3 + 1) % 4 === 0 && "bg-[#eb441f]/15 border-[#eb441f]"
                  )}
                >
                  link
                </Badge>
                <Badge variant="dash">no keywords</Badge>
              </div>
              {/* WIP: Update with dynamic data */}
              <div className="flex items-center gap-1 text-xs text-gray-500 !mt-2">
                <Calendar className="size-3" />
                <span>October 5th 2024</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {/* WIP: Implement activation logic */}
              <Switch
                className="data-[state=checked]:bg-[#aae0a5]"
                checked
                aria-label="Toggle automation"
              />

              {/* WIP: Add link to visit animation page, for editing */}
              <Button variant="ghost" size="icon">
                <Pencil className="size-4" />
              </Button>

              {/* WIP: Implement functionality to delete automation */}
              <Button variant="ghost" size="icon" className="group">
                <Trash2 className="size-4 group-hover:text-red-600" />
              </Button>
            </div>
          </div>

          {/* 2nd animation */}
          <div className="flex flex-col gap-4 justify-between py-4 sm:flex-row sm:items-start">
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap gap-2 items-center">
                <h3 className="font-medium">Send Research PDF</h3>
                <Badge>Standard</Badge>
              </div>
              <p className="max-w-lg text-sm text-gray-500 dark:text-gray-400 text-pretty line-clamp-1 text-ellipsis">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet hic temporibus nemo.
              </p>
              <div className="flex flex-wrap gap-x-2">
                <Badge variant="dash">no keywords</Badge>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 !mt-2">
                <Calendar className="size-3" />
                <span>October 5th 2024</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Switch
                className="data-[state=checked]:bg-[#aae0a5]"
                checked={false}
                aria-label="Toggle automation"
              />
              <Button variant="ghost" size="icon">
                <Pencil className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" className="group">
                <Trash2 className="size-4 group-hover:text-red-600" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
