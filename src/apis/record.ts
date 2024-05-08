import { axiosInstance } from '~/apis/axiosInstance';
import type { Record, RecordDetail, RecordInfo } from '~/types/record';

export const getRecordList = async () => {
  const { data } = await axiosInstance.get<RecordInfo[]>('/myrok/list');

  return data;
};

export const postRecord = (data: Record) => {
  return axiosInstance.post<{ recordId: number }>('/myrok/records', data);
};

export const getRecord = async (recordId: number) => {
  const { data } = await axiosInstance.get<RecordDetail>(
    `/myrok/records/${recordId}`,
  );

  return data;
};
