import { useMutation } from '@tanstack/react-query';
import { getGoogleLogin } from '~/apis/user';

export const usePostGoogleLogin = () => {
  const { mutate } = useMutation({
    mutationFn: getGoogleLogin,
  });

  return { mutateGoogleLogin: mutate };
};
