import { useMutation } from '@tanstack/react-query';
import { postGoogleLogin } from '~/apis/user';

export const usePostGoogleLogin = () => {
  const { mutate } = useMutation({
    mutationFn: postGoogleLogin,
    retry: false,
  });

  return { mutateGoogleLogin: mutate };
};
