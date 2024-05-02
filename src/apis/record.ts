import { axiosInstance } from '~/apis/axiosInstance';
import type { RecordInfo } from '~/types/record';

export const getRecordList = async () => {
  const { data } = await axiosInstance.get<RecordInfo[]>('/myrok/list');

  return data;
};
