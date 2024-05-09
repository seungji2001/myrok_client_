import { useQuery } from '@tanstack/react-query';
import { getRecordList } from '~/apis/record';
import { useProject } from '~/hooks/useProject';
import type { RecordInfo } from '~/types/record';

export const useGetRecordList = () => {
  const { projectId } = useProject();

  const { data, isFetched } = useQuery({
    queryKey: ['recordList', projectId],
    queryFn: () => getRecordList(projectId),
  });

  if (data === undefined) return { recordInfoList: [] as RecordInfo[] };

  return { recordInfoList: data, isFetched };
};
