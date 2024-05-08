import type { ProjectInfo } from '~/types/project';

export interface UserProjectInfo extends ProjectInfo {
  projectId: number;
}

export interface UserInfo {
  memberId: number;
  name: string;
  picture: string;
  email: string;
}
