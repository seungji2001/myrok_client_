import { useQuery } from '@tanstack/react-query';
import { getRecordTagList } from '~/apis/record';
import { useProject } from '~/hooks/useProject';
import type { RecordTag } from '~/types/record';

export const useGetRecordTagList = () => {
  const { projectId } = useProject();

  const { data } = useQuery({
    queryKey: [projectId, 'recordTagList'],
    queryFn: () => getRecordTagList(projectId),
  });

  if (data === undefined) return { tagList: [] as RecordTag[], totalCount: 0 };

  return data;
};
