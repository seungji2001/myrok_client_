import axios from 'axios';

import {
  checkAndSetToken,
  handleAPIError,
  handleTokenError,
} from '~/apis/interceptors';
import { AXIOS_BASE_URL } from '~/constants/api';

export const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError,
);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
