import axios from 'axios';
import { handleAPIError } from '~/apis/interceptors';
import { AXIOS_BASE_URL } from '~/constants/api';

export const instance = axios.create({
  baseURL: AXIOS_BASE_URL,
});

instance.interceptors.response.use((response) => response, handleAPIError);
