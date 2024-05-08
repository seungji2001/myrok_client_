import { useQuery } from '@tanstack/react-query';
import { getProjectMemberNames } from '~/apis/project';
import { useProject } from '~/hooks/useProject';
import type { ProjectMemberNames } from '~/types/project';

export const useGetProjectMemberNames = () => {
  const { projectId } = useProject();

  const { data } = useQuery({
    queryKey: ['projectMemberNames'],
    queryFn: () => getProjectMemberNames(projectId),
  });

  if (data === undefined)
    return { projectMemberNames: [] as ProjectMemberNames[] };

  return data;
};
