import { axiosInstance } from '~/apis/axiosInstance';
import type {
  Record,
  RecordDetail,
  RecordInfo,
  Summary,
  DashBoardTag,
  RecordTag,
} from '~/types/record';

export const getRecordList = async (
  projectId: number,
  tagName: string,
  recordName: string,
) => {
  let url = '';

  if (tagName.length !== 0 && recordName.length !== 0)
    url = `?tagName=${tagName}&recordName=${recordName}`;
  else if (tagName.length !== 0) url = `?tagName=${tagName}`;
  else if (recordName.length !== 0) url = `?recordName=${recordName}`;

  const { data } = await axiosInstance.get<RecordInfo[]>(
    `/myrok/${projectId}/list${url}`,
  );

  return data;
};

export const postRecord = (data: Record) => {
  return axiosInstance.post<{ recordId: number }>('/myrok/records', data);
};

export const patchRecord = (
  recordId: number,
  data: Pick<Record, 'recordWriterId' | 'recordName' | 'tagList'>,
) => {
  return axiosInstance.patch<{ recordId: number }>(
    `/myrok/records/${recordId}`,
    data,
  );
};

export const getRecord = async (recordId: number) => {
  const { data } = await axiosInstance.get<RecordDetail>(
    `/myrok/records/${recordId}`,
  );

  return data;
};

export const getSummary = async (recordId: number) => {
  const { data } = await axiosInstance.get<Summary>(
    `/myrok/record/summary?recordId=${recordId}`,
  );

  return data;
};

export const getDashBoardTags = async (projectId: number) => {
  const { data } = await axiosInstance.get<{
    tags: DashBoardTag[];
    etcPercentage: number;
  }>(`/myrok/${projectId}/dashboard`);

  return data;
};

export const getRecordTagList = async (projectId: number) => {
  const { data } = await axiosInstance.get<{
    tagList: RecordTag[];
    totalCount: number;
  }>(`/myrok/${projectId}/tagList`);

  return data;
};
