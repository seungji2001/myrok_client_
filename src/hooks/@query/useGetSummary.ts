import { useQuery } from '@tanstack/react-query';
import { getSummary } from '~/apis/record';
import type { Summary } from '~/types/record';

export const useGetSummary = (recordId: number) => {
  const { data } = useQuery({
    queryKey: [recordId, 'summary'],
    queryFn: () => getSummary(recordId),
  });

  if (data === undefined)
    return {
      summaryId: 0,
      summary: '',
    } as Summary;

  return data;
};
