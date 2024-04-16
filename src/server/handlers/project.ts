import { rest } from 'msw';
import { fakeProjectInfo } from '~/server/handlers/user';
import { projectInviteCode } from '~/server/mocks/project';

export const projectHandlers = () => {
  return [
    rest.post('/myrok/project', postCreateProject),
    rest.post('/myrok/project/participate', postJoinProject),
  ];
};

const postCreateProject: Parameters<typeof rest.get>[1] = async (
  req,
  res,
  ctx,
) => {
  const { projectName, startDate, endDate } = await req.json();

  if (typeof projectName !== 'string') return res(ctx.status(400));

  if (startDate.length !== 0) fakeProjectInfo.startDate = startDate;
  if (endDate.length !== 0) fakeProjectInfo.endDate = endDate;

  fakeProjectInfo.projectName = projectName;
  fakeProjectInfo.projectId += 1;

  return res(
    ctx.status(200),
    ctx.json({
      projectId: fakeProjectInfo.projectId,
    }),
  );
};

const postJoinProject: Parameters<typeof rest.get>[1] = async (
  req,
  res,
  ctx,
) => {
  const { inviteCode } = await req.json();
  const index = projectInviteCode.findIndex(
    (project) => project.inviteCode === inviteCode,
  );

  if (index === -1)
    return res(
      ctx.status(404),
      ctx.json({
        statusCode: 40401,
        code: 'P004',
        message: '잘못된 참여코드 입니다.',
      }),
    );

  const { projectId, projectName, startDate, endDate } =
    projectInviteCode[index];

  fakeProjectInfo.projectId = projectId;
  fakeProjectInfo.projectName = projectName;
  if (startDate !== undefined && startDate.length !== 0)
    fakeProjectInfo.startDate = startDate;
  else fakeProjectInfo.startDate = '1000-01-01';
  if (startDate !== undefined && endDate.length !== 0)
    fakeProjectInfo.endDate = endDate;
  else fakeProjectInfo.endDate = '3000-01-01';

  return res(
    ctx.status(200),
    ctx.json({
      projectId: fakeProjectInfo.projectId,
    }),
  );
};
