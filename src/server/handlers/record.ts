import { rest } from 'msw';
import { recordList } from '~/server/mocks/record';

export const recordHandler = () => {
  return [rest.get('/myrok/list', getRecordList)];
};

const getRecordList: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(recordList));
};
