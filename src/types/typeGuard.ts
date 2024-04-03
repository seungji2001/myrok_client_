import type { YYYYMMDD } from '~/types/project';

export const isYYYYMMDD = (value: unknown): value is YYYYMMDD => {
  if (typeof value !== 'string') {
    return false;
  }

  return /^\d{4}-\d{2}-\d{2}$/.test(value);
};
