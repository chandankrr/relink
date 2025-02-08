import { useEffect, useRef, useState } from "react";
import { z } from "zod";

import {
  createAutomation,
  saveListener,
  saveTrigger,
  updateAutomationDetails,
} from "@/actions/automation";
import useAutomationStore from "@/store/useAutomationStore";

import { useMutationData } from "./use-mutation-data";
import { useZodForm } from "./use-zod-form";

export const useCreateAutomation = () => {
  const { mutate, isPending } = useMutationData(
    ["create-automation"],
    () => createAutomation(),
    "user-automations"
  );

  return {
    mutate,
    isPending,
  };
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  const { mutate, isPending } = useMutationData(
    ["update-automation"],
    (data: { name: string }) =>
      updateAutomationDetails(automationId, { name: data.name }),
    "automation-info",
    disableEdit
  );

  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node | null)
      ) {
        if (inputRef.current.value !== "") {
          mutate({ name: inputRef.current.value });
        } else {
          disableEdit();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mutate]);

  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef,
    isPending,
  };
};

export const useListener = (id: string) => {
  const [listener, setListener] = useState<"MESSAGE" | "SMARTAI" | null>(null);

  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string(),
  });

  const { mutate, isPending } = useMutationData(
    ["create-listener"],
    (data: { prompt: string; reply: string }) =>
      saveListener(id, listener || "MESSAGE", data.prompt, data.reply),
    "automation-info"
  );

  const { onFormSubmit, register } = useZodForm(promptSchema, mutate);

  const onSetListener = (type: "SMARTAI" | "MESSAGE") => setListener(type);

  return {
    onSetListener,
    register,
    onFormSubmit,
    listener,
    isPending,
  };
};

export const useTriggers = (id: string) => {
  const types = useAutomationStore((state) => state.trigger.types);
  const setTrigger = useAutomationStore((state) => state.setTrigger);

  const { mutate, isPending } = useMutationData(
    ["add-trigger"],
    (data: { types: string[] }) => saveTrigger(id, data.types),
    "automation-info"
  );

  const onSetTrigger = (type: "COMMENT" | "DM") => {
    setTrigger(type);
  };

  const onSaveTrigger = () => mutate({ types });

  return { types, onSetTrigger, onSaveTrigger, isPending };
};
