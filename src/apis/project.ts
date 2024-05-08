import { axiosInstance } from '~/apis/axiosInstance';
import type { ProjectInfo, ProjectMemberNames } from '~/types/project';

export const postCreateProject = (data: ProjectInfo) => {
  return axiosInstance.post('/myrok/project', data);
};

export const postJoinProject = (data: { inviteCode: string }) => {
  return axiosInstance.post('/myrok/project/participate', data);
};

export const getProjectMemberNames = async (projectId: number) => {
  const { data } = await axiosInstance.get<{
    projectMemberNames: ProjectMemberNames[];
  }>(`/myrok/project/${projectId}/members`);

  return data;
};
