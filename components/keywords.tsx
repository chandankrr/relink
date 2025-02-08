import { useKeywords } from "@/hooks/use-automations";
import { useQueryAutomation } from "@/hooks/use-queries";
import { XIcon } from "lucide-react";
import { Input } from "./ui/input";

export const Keywords = ({ id }: { id: string }) => {
  const { keyword, onValueChange, onKeyPress, deleteMutate } = useKeywords(id);
  const { data } = useQueryAutomation(id);

  return (
    <div className="flex flex-col gap-y-3 rounded-xl bg-red-500 p-3">
      <p className="text-sm text-secondary-foreground">
        Add words that trigger your automation
      </p>
      <Input
        placeholder="Add keyword..."
        value={keyword}
        onChange={onValueChange}
        onKeyUp={onKeyPress}
        className="p-0 bg-transparent ring-0 border-none outline-none"
      />
      <div className="flex flex-wrap justify-start gap-2 items-center">
        {data?.data?.keywords &&
          data.data.keywords.map((k) => (
            <div
              key={k.id}
              className="bg-yellow-700 flex items-center gap-x-2 lowercase text-secondary-foreground py-1 px-4 rounded-full"
            >
              <p>{k.word}</p>
              <XIcon
                size={20}
                onClick={() => deleteMutate({ id: k.id })}
                className="cursor-pointer"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
