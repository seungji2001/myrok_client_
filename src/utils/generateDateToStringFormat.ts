import type { YYYYMMDD } from '~/types/project';

export const generateDateToStringFormat = (date: YYYYMMDD) => {
  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
};
