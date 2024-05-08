import type { UserInfo } from '~/types/user';

export type YYYYMMDD = `${string}-${string}-${string}`;

export interface Period {
  startDate: YYYYMMDD;
  endDate: YYYYMMDD;
}

export interface ProjectInfo extends Period {
  projectName: string;
}

export type ProjectMemberNames = Extract<UserInfo, 'memberId' | 'name'>;
