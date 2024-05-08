import { useQuery } from '@tanstack/react-query';
import { getRecord } from '~/apis/record';
import type { RecordDetail } from '~/types/record';

export const useGetRecord = (recordId: number) => {
  const { data } = useQuery({
    queryKey: [recordId, 'record'],
    queryFn: () => getRecord(recordId),
  });

  if (data === undefined)
    return {
      recordId: 0,
      recordName: '',
      recordDate: '1000-01-01',
      recordWriterId: 0,
      recordContent: '',
      tagList: [],
      memberList: [],
    } as RecordDetail;

  return data;
};
