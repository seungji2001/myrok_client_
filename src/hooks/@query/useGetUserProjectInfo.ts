import { useQuery } from '@tanstack/react-query';
import { getUserProjectInfo } from '~/apis/user';
import { DEFAULT_END_DATE, DEFAULT_START_DATE } from '~/constants/project';
import type { UserProjectInfo } from '~/types/user';

export const useGetUserProjectInfo = () => {
  const { data, isFetched } = useQuery({
    queryKey: ['userProjectInfo'],
    queryFn: getUserProjectInfo,
  });

  if (data?.projectId === undefined) {
    return {
      projectInfo: {
        projectId: 0,
        projectName: '',
        startDate: DEFAULT_START_DATE,
        endDate: DEFAULT_END_DATE,
      } as UserProjectInfo,
      isFetched,
    };
  }

  return { projectInfo: data, isFetched };
};
