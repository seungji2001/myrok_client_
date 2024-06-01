import { useQuery } from '@tanstack/react-query';
import { getInviteCode } from '~/apis/project';

export const useGetInviteCode = (projectId: number) => {
  const { data } = useQuery({
    queryKey: ['inviteCord'],
    queryFn: () => getInviteCode(projectId),
    enabled: projectId !== 0,
  });

  return data;
};
