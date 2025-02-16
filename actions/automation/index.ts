"use server";

import { onCurrentUser } from "../user";
import {
  addAutomation,
  addListener,
  addTrigger,
  findAutomation,
  getAutomations,
  updateAutomation,
} from "./queries";

export const getAllAutomations = async () => {
  const user = await onCurrentUser();

  try {
    const automations = await getAutomations(user.id);

    if (automations) {
      return {
        status: 200,
        data: automations.automations,
      };
    }

    return {
      status: 404,
      data: [],
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: [],
    };
  }
};

export const createAutomation = async () => {
  const user = await onCurrentUser();

  try {
    const create = await addAutomation(user.id);

    if (create) {
      return { status: 200, data: "Automation created" };
    }

    return { status: 404, data: "Oops! something went wrong" };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "Internal server error" };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();

  try {
    const automation = await findAutomation(id);

    if (automation) {
      return {
        status: 200,
        data: automation,
      };
    }

    return {
      status: 404,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
    };
  }
};

export const updateAutomationDetails = async (
  automationId: string,
  data: {
    name?: string;
    description?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();

  try {
    const update = await updateAutomation(automationId, data);

    if (update) {
      return {
        status: 200,
        data: "Automation successfully updated",
      };
    }

    return {
      status: 404,
      data: "Oops! could not find automation",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: "Oops!, omething went wrong",
    };
  }
};

export const saveListener = async (
  automationId: string,
  listener: "SMARTAI" | "MESSAGE",
  prompt: string,
  reply?: string
) => {
  await onCurrentUser();

  try {
    const create = await addListener(automationId, listener, prompt, reply);

    if (create) {
      return {
        status: 200,
        data: "listener created",
      };
    }

    return {
      status: 404,
      data: "Can't save listener",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: "Oops! something went wrong",
    };
  }
};

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser();

  try {
    const create = await addTrigger(automationId, trigger);

    if (create) {
      return {
        status: 200,
        data: "Trigger saved",
      };
    }

    return {
      status: 404,
      data: "Cannot save trigger",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: "Oops! something went wrong",
    };
  }
};
