import { axiosInstance } from '~/apis/axiosInstance';
import type { ProjectInfo } from '~/types/project';

export const postCreateProject = (data: ProjectInfo) => {
  return axiosInstance.post('/myrok/project', data);
};

export const postJoinProject = (data: { inviteCode: string }) => {
  return axiosInstance.post('/myrok/project/participate', data);
};
