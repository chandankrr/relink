"use client";

import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "./ui/button";

interface DashboardPageProps {
  title: string;
  children?: React.ReactNode;
  hideBackButton?: boolean;
  cta?: React.ReactNode;
}

export const DashboardPage = ({
  title,
  children,
  hideBackButton,
  cta,
}: DashboardPageProps) => {
  const router = useRouter();
  const { slug } = useParams();

  return (
    <section className="flex flex-col flex-1 w-full h-full">
      <div className="flex justify-between p-6 border-b border-gray-200 sm:p-8">
        <div className="flex flex-col gap-6 items-start w-full lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-8 items-center w-full">
            {hideBackButton ? null : (
              <Button
                onClick={() => router.push(`/dashboard/${slug}`)}
                className="bg-white sm:w-fit"
                variant="outline"
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}

            <h3 className="text-5xl uppercase font-heading">{title}</h3>
          </div>
          {cta ? <div className="w-full sm:w-fit">{cta}</div> : null}
        </div>
      </div>

      <div className="flex overflow-y-auto flex-col flex-1 p-6 sm:p-8">
        {children}
      </div>
    </section>
  );
};
