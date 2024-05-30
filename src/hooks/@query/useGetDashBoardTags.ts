import { useQuery } from '@tanstack/react-query';
import { getDashBoardTags } from '~/apis/record';
import { useProject } from '~/hooks/useProject';
import type { DashBoardTag } from '~/types/record';

export const useGetDashBoardTags = () => {
  const { projectId } = useProject();

  const { data } = useQuery({
    queryKey: [projectId, 'dashBoardTags'],
    queryFn: () => getDashBoardTags(projectId),
  });

  if (data === undefined)
    return { tags: [] as DashBoardTag[], etcPercentage: 0 };

  return data;
};
