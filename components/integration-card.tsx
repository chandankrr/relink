"use client";

import { onOAuthInstagram } from "@/actions/integration";
import { onUserInfo } from "@/actions/user";

import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";

export const IntegrationCard = () => {
  const onInstaOAuth = () => onOAuthInstagram();

  const { data } = useQuery({
    queryKey: ["user-profile"],
    queryFn: onUserInfo,
  });

  const integrated = data?.data?.integrations.find(
    (integration) => integration.name === "INSTAGRAM"
  );

  return (
    <div className="w-full flex items-center justify-center">
      <Button
        disabled={integrated?.name === "INSTAGRAM"}
        onClick={onInstaOAuth}
      >
        {integrated?.name === "INSTAGRAM" ? "Connected" : "Connect"}
      </Button>
    </div>
  );
};
