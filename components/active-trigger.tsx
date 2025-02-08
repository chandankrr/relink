import { Instagram, SendHorizontal } from "lucide-react";

interface ActiveTriggerProps {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
}

export const ActiveTrigger = ({ type, keywords }: ActiveTriggerProps) => {
  return (
    <div className="bg-gray-200 p-3 rounded-xl w-full">
      <div className="flex gap-x-2 items-center">
        {type === "COMMENT" ? <Instagram /> : <SendHorizontal />}
        <p className="text-lg">
          {type === "COMMENT"
            ? "User comments on my post."
            : "User sends me a direct message."}
        </p>
      </div>
      <p className="text-gray-500">
        {type === "COMMENT"
          ? "If the user comments on a post that is setup to listen for keywords, this automation will fire."
          : "If the user send you a message that contains a keywords, this automation will fire."}
      </p>
      <div className="flex gap-2 mt-5 flex-wrap">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-br from-[#3352cc] to-[#1c2d70] flex items-center gap-x-2 text-white font-light py-1 px-4 rounded-full"
          >
            {word.word}
          </div>
        ))}
      </div>
    </div>
  );
};
