import { axiosInstance } from '~/apis/axiosInstance';
import { instance } from '~/apis/instance';

export const postGoogleLogin = async () => {
  const { data } = await instance.post<{ loginUrl: string }>(
    '/myrok/auth/google',
  );

  return data;
};

export const postTokenReissue = async () => {
  const { data } = await axiosInstance.post<{
    accessToken: string;
  }>('/myrok/reissue/google');

  return data;
};
