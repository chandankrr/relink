import { redirect } from "next/navigation";

import { onSubscribe } from "@/actions/user";

interface PaymentPageProps {
  searchParams: Promise<{ cancel?: boolean; session_id?: string }>;
}

const PaymentPage = async ({ searchParams }: PaymentPageProps) => {
  const { cancel, session_id } = await searchParams;

  if (session_id) {
    const customer = await onSubscribe(session_id);

    if (customer.status === 200) {
      return redirect("/dashboard");
    }

    return (
      <div className="flex-col flex justify-center items-center min-h-screen w-full">
        <h4 className="text-5xl font-bold">404</h4>
        <p className="text-xl font-bold">Ops! Something went wrong!</p>
      </div>
    );
  }

  if (cancel) {
    return (
      <div className="flex-col flex justify-center items-center min-h-screen w-full">
        <h4 className="text-5xl font-bold">404</h4>
        <p className="text-xl font-bold">
          Ops! You have cancelled the payment.
        </p>
      </div>
    );
  }
};

export default PaymentPage;
