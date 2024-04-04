import { userHandlers } from '~/server/handlers/user';

export const handlers = () => {
  return [...userHandlers()];
};
