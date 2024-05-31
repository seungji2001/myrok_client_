import { rest } from 'msw';
import { projectMemberNames } from '~/server/mocks/project';
import {
  recordList as recordListData,
  record as recordData,
  summary as summaryData,
  tags as tagsData,
} from '~/server/mocks/record';
import type { RecordDetail, RecordInfo } from '~/types/record';

let recordList = [...recordListData];
let record = [...recordData];
let summaryList = [...summaryData];
let lastRecordId = recordListData[0].recordId;
let tags = new Map([...tagsData]);

export const recordHandler = () => {
  return [
    rest.get('/myrok/:projectId/list', getRecordList),
    rest.get('/myrok/records/:recordId', getRecord),
    rest.post('/myrok/records', postRecord),
    rest.get('/myrok/record/summary', getSummary),
    rest.patch('/myrok/records/:recordId', patchRecord),
    rest.get('/myrok/:projectId/dashboard', getDashBoardTags),
    rest.get('/myrok/:projectId/tagList', getRecordTagList),
  ];
};

const getSummary: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const recordId = req.url.searchParams.get('recordId');

  const summary = summaryList.find(
    (data) => data.summaryId === Number(recordId),
  );

  if (summary === undefined)
    return res(ctx.status(200), ctx.json({ summaryId: recordId, summary: '' }));

  return res(ctx.status(200), ctx.json({ ...summary }));
};

const getRecord: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const { recordId } = req.params;

  const recordDetail = record.find(
    (data) => data.recordId === Number(recordId),
  );

  if (recordDetail === undefined) return res(ctx.status(404));

  return res(ctx.status(200), ctx.json({ ...recordDetail }));
};

const getMatchingAObjects = (
  recordDetailList: RecordDetail[],
  recordList: RecordInfo[],
) => {
  const matchingAObjects = recordList.filter((i) =>
    recordDetailList.some((d) => d.recordId === i.recordId),
  );

  return matchingAObjects;
};

const getRecordList: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const tagName = req.url.searchParams.get('tagName');
  const recordName = req.url.searchParams.get('recordName');

  if (tagName === null && recordName === null)
    return res(ctx.status(200), ctx.json(recordList));

  const tagNameList = record.filter((data) => {
    return data.tagList.some((tag) => tag === tagName);
  });

  const recordNameList = record.filter((data) => {
    if (recordName === null) return false;
    return data.recordName.includes(recordName);
  });

  const tagInfoList = getMatchingAObjects(tagNameList, recordList);
  const recordInfoList = getMatchingAObjects(recordNameList, recordList);

  if (tagName !== null && recordName === null)
    return res(ctx.status(200), ctx.json(tagInfoList));

  if (tagName === null && recordName !== null)
    return res(ctx.status(200), ctx.json(recordInfoList));

  const searchList = tagInfoList.filter((data1) =>
    recordInfoList.some((data2) => data2.recordId === data1.recordId),
  );

  return res(ctx.status(200), ctx.json(searchList));
};

const postRecord: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const {
    recordName,
    recordContent,
    tagList,
    recordWriterId,
    recordDate,
    memberList,
    projectId,
  } = await req.json();

  lastRecordId += 1;
  let recordWriterName = projectMemberNames.find(
    (member) => member.memberId === recordWriterId,
  );

  recordList = [
    {
      recordId: lastRecordId,
      recordName: recordName,
      recordDate: recordDate,
      recordWriterName: recordWriterName ? recordWriterName.name : '송지은',
    },
    ...recordList,
  ];
  summaryList.push({ summaryId: lastRecordId, summary: '' });

  const member = memberList.map((memberId: number) => {
    return projectMemberNames.find((project) => project.memberId === memberId);
  });

  record.push({
    recordId: lastRecordId,
    recordName: recordName,
    recordDate: recordDate,
    recordWriterId: recordWriterId,
    recordContent: recordContent,
    tagList: [...tagList],
    memberList: [...member],
  });

  tagList.forEach((item: string) => {
    const count = tags.get(item);

    if (tags.has(item) && count !== undefined) {
      tags.set(item, count + 1);
    } else {
      tags.set(item, 1);
    }
  });

  return res(
    ctx.status(200),
    ctx.json({
      recordId: lastRecordId,
    }),
  );
};

const patchRecord: Parameters<typeof rest.patch>[1] = async (req, res, ctx) => {
  const { recordId } = req.params;
  const { recordName, tagList } = await req.json();

  const recordIndex = record.findIndex(
    (data) => data.recordId === Number(recordId),
  );

  if (recordIndex === undefined) return res(ctx.status(404));

  record[recordIndex].recordName = recordName;
  record[recordIndex].tagList = tagList;

  return res(
    ctx.status(200),
    ctx.json({
      recordId: record[recordIndex].recordId,
    }),
  );
};

const getDashBoardTags: Parameters<typeof rest.get>[1] = async (
  _,
  res,
  ctx,
) => {
  const sortedKeys = Array.from(tags.keys()).sort((a, b) => {
    const getA = tags.get(a);
    const getB = tags.get(b);
    if (getA !== undefined && getB !== undefined) return getB - getA;

    return 0;
  });

  const top4Keys = sortedKeys.slice(0, 4);

  const top4Entries = {
    tags: [
      {
        tagName: top4Keys[0],
        percentage: 40,
      },
      {
        tagName: top4Keys[1],
        percentage: 30,
      },
      {
        tagName: top4Keys[2],
        percentage: 15,
      },
      {
        tagName: top4Keys[3],
        percentage: 5,
      },
    ],
    etcPercentage: 10,
  };

  return res(ctx.status(200), ctx.json({ ...top4Entries }));
};

const getRecordTagList: Parameters<typeof rest.get>[1] = async (
  _,
  res,
  ctx,
) => {
  const tagList = Array.from(tags, ([tagName, count]) => ({ tagName, count }));
  const totalCount = tagList.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  return res(
    ctx.status(200),
    ctx.json({ totalCount: totalCount, tagList: [...tagList] }),
  );
};
