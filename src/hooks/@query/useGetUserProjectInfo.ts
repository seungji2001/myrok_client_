import { useQuery } from '@tanstack/react-query';
import { getUserProjectInfo } from '~/apis/user';
import type { UserProjectInfo } from '~/types/user';
export const useGetUserProjectInfo = () => {
  const { data, isFetched } = useQuery({
    queryKey: ['userProjectInfo'],
    queryFn: () => getUserProjectInfo(),
  });

  if (data?.projectId === undefined) {
    return {
      projectInfo: {
        projectId: 0,
        projectName: '',
      },
      isFetched,
    };
  }

  return { projectInfo: data, isFetched };
};
