export type YYYYMMDD = `${string}-${string}-${string}`;

export interface Period {
  startDate: YYYYMMDD;
  endDate: YYYYMMDD;
}

export interface ProjectInfo extends Period {
  projectName: string;
}

export interface ProjectMemberNames {
  memberId: number;
  memberName: string;
}
