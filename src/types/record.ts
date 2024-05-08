import { YYYYMMDD } from '~/types/project';

export interface RecordInfo {
  recordId: number;
  recordName: string;
  recordDate: YYYYMMDD;
  recordWriterName: string;
}

export interface Record {
  projectId: number;
  recordName: string;
  recordContent: string;
  recordWriterId: number;
  tagList: string[];
  recordDate: YYYYMMDD;
  memberList: number[];
}
