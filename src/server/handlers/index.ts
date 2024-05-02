import { projectHandlers } from '~/server/handlers/project';
import { recordHandler } from '~/server/handlers/record';
import { userHandlers } from '~/server/handlers/user';

export const handlers = () => {
  return [...userHandlers(), ...projectHandlers(), ...recordHandler()];
};
