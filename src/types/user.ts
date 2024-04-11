import type { ProjectInfo } from '~/types/project';

export interface UserProjectInfo extends ProjectInfo {
  projectId: number;
}
