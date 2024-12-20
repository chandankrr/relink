import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCreateAutomation } from "@/hooks/use-automations";

export const EmptyAutomationState = () => {
  const { mutate, isPending } = useCreateAutomation();

  return (
    <Card className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6">
      <div className="flex justify-center w-full">
        <img
          src="/empty-state.png"
          alt="No categories"
          className="h-40 w-auto"
        />
      </div>
      <h1 className="mt-8 text-xl/8 font-medium tracking-tight text-gray-900">
        No Automation Created Yet
      </h1>
      <p className="text-sm/6 text-gray-600 max-w-prose mt-2 mb-8">
        Start automating your Instagram by creating your first workflow.
      </p>

      {/* buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Button
          variant="outline"
          className="flex items-center space-x-2 w-full md:w-auto h-11"
          onClick={mutate}
          disabled={isPending}
        >
          <span className="size-5">🚀</span>
          <span>{isPending ? "Creating..." : "Create Automation"}</span>
        </Button>
      </div>
    </Card>
  );
};
