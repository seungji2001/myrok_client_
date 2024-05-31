import { useQuery } from '@tanstack/react-query';
import { getRecordList } from '~/apis/record';
import { useProject } from '~/hooks/useProject';
import type { RecordInfo } from '~/types/record';

export const useGetRecordList = (tagName: string, recordName: string) => {
  const { projectId } = useProject();

  const { data, isFetched } = useQuery({
    queryKey: ['recordList', projectId, tagName, recordName],
    queryFn: () => getRecordList(projectId, tagName, recordName),
  });

  if (data === undefined) return { recordInfoList: [] as RecordInfo[] };

  return { recordInfoList: data, isFetched };
};
