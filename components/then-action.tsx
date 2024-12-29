"use client";

import { useListener } from '@/hooks/use-automations';

import { TriggerButton } from './trigger-button';

export const ThenAction = ({ id }: { id: string }) => {
  const {
    onSetListener,
    listener: Listener,
    onFormSubmit,
    register,
    isPending,
  } = useListener(id);

  return <TriggerButton label="Then">jhgjh</TriggerButton>;
};
