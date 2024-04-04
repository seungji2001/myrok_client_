import { axiosInstance } from '~/apis/axiosInstance';
import { instance } from '~/apis/instance';
import { LOCAL_STORAGE } from '~/constants/api';
import type { UserProjectInfo } from '~/types/user';

export const postGoogleLogin = async () => {
  const { data } = await instance.post<{ loginUrl: string }>(
    '/myrok/auth/google',
  );

  return data;
};

export const postTokenReissue = async () => {
  const refreshToken = localStorage.getItem(LOCAL_STORAGE.REFRESH_TOKEN);
  const { data } = await axiosInstance.post<{
    accessToken: string;
  }>('/myrok/reissue/google', { refreshToken: refreshToken });

  return data;
};

export const getUserProjectInfo = async () => {
  const { data } =
    await axiosInstance.get<UserProjectInfo>('/myrok/me/project');

  return data;
};
