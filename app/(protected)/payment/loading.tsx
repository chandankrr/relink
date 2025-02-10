import { Loader2Icon } from "lucide-react";

const PaymentLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="animate-spin mr-2 size-5" />
      Loading
    </div>
  );
};

export default PaymentLoading;
