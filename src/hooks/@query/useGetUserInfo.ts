import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '~/apis/user';

export const useGetUserInfo = () => {
  const { data } = useQuery({
    queryKey: ['useInfo'],
    queryFn: getUserInfo,
  });

  if (data === undefined)
    return { memberId: 0, name: '', picture: '', email: '' };

  return data;
};
