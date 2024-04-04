import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { HTTPError } from '~/apis/HTTPError';
import { axiosInstance } from '~/apis/axiosInstance';
import { postTokenReissue } from '~/apis/user';
import { ERROR_CODE, HTTP_STATUS_CODE, LOCAL_STORAGE } from '~/constants/api';
import { ROUTES } from '~/constants/routes';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: string;
  detail?: string;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.headers || config.headers.Authorization) return config;

  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);

  if (!accessToken) {
    window.location.href = ROUTES.ROOT;
    throw new Error('토큰이 유효하지 않습니다');
  }

  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const handleTokenError = async (
  error: AxiosError<ErrorResponseData>,
) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest)
    throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (
    status === HTTP_STATUS_CODE.BAD_REQUEST &&
    data.code === ERROR_CODE.EXPIRED_ACCESS_TOKEN
  ) {
    const { accessToken } = await postTokenReissue();
    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, accessToken);

    return axiosInstance(originalRequest);
  }

  if (
    status === HTTP_STATUS_CODE.BAD_REQUEST &&
    (data.code === ERROR_CODE.INVALID_ACCESS_TOKEN ||
      data.code === ERROR_CODE.INVALID_REFRESH_TOKEN ||
      data.code === ERROR_CODE.EXPIRED_REFRESH_TOKEN ||
      data.code === ERROR_CODE.NULL_REFRESH_TOKEN ||
      data.code === ERROR_CODE.UNEXPECTED_TOKEN_ERROR ||
      data.code === ERROR_CODE.UNAUTHORIZED ||
      data.code === ERROR_CODE.INVALID_ACCESS_TOKEN)
  ) {
    localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);

    throw new HTTPError(status, data.message, data.code, data.detail);
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw error;

  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message, data.code, data.detail);
};
