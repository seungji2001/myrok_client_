import { YYYYMMDD } from '~/types/project';

export interface RecordInfo {
  recordId: number;
  recordName: string;
  recordDate: YYYYMMDD;
  recordWriterName: string;
}
