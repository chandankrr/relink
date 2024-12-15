import { Loader } from "@/components/loader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader className="animate-spin" color="black" state>
        ...Loading
      </Loader>
    </div>
  );
}
