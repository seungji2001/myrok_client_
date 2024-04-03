import type { YYYYMMDD } from '~/types/project';

export const isYYYYMMDD = (value: unknown): value is YYYYMMDD => {
  if (typeof value !== 'string') {
    return false;
  }

  return /^\d{4}-\d{2}-\d{2}$/.test(value);
};

export function hasKeyInObject<T extends object>(
  obj: T,
  key: string | number | symbol,
): key is keyof T {
  return Object.hasOwn(obj, key);
}
