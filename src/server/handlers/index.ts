import { projectHandlers } from '~/server/handlers/project';
import { userHandlers } from '~/server/handlers/user';

export const handlers = () => {
  return [...userHandlers(), ...projectHandlers()];
};
