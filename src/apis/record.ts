import { axiosInstance } from '~/apis/axiosInstance';
import type { Record, RecordInfo } from '~/types/record';

export const getRecordList = async () => {
  const { data } = await axiosInstance.get<RecordInfo[]>('/myrok/list');

  return data;
};

export const postRecord = (data: Record) => {
  return axiosInstance.post<{ recordId: number }>('/myrok/records', data);
};
