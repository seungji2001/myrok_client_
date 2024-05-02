import { useQuery } from '@tanstack/react-query';
import { getRecordList } from '~/apis/record';
import type { RecordInfo } from '~/types/record';

export const useGetRecordList = () => {
  const { data } = useQuery({
    queryKey: ['recordList'],
    queryFn: getRecordList,
  });

  if (data === undefined) return { recordInfoList: [] as RecordInfo[] };

  return { recordInfoList: data };
};
