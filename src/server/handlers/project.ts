import { rest } from 'msw';
import { fakeProjectInfo } from '~/server/handlers/user';
import { projectInviteCode, projectMemberNames } from '~/server/mocks/project';

export const projectHandlers = () => {
  return [
    rest.post('/myrok/project', postCreateProject),
    rest.post('/myrok/project/participate', postJoinProject),
    rest.get(`/myrok/project/:projectId/members`, getProjectMemberNames),
    rest.get(`/myrok/project/:projectId`, getInviteCode),
    rest.delete('/myrok/project', deleteProject),
  ];
};

const postCreateProject: Parameters<typeof rest.post>[1] = async (
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

const postJoinProject: Parameters<typeof rest.post>[1] = async (
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

const getProjectMemberNames: Parameters<typeof rest.get>[1] = async (
  _,
  res,
  ctx,
) => {
  return res(
    ctx.status(200),
    ctx.json({ projectMemberNames: projectMemberNames }),
  );
};

const getInviteCode: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const projectId = req.params.projectId;

  const index = projectInviteCode.findIndex(
    (project) => project.projectId === Number(projectId),
  );

  if (index === -1) return res(ctx.status(404));

  return res(
    ctx.status(200),
    ctx.json({ inviteCode: projectInviteCode[index].inviteCode }),
  );
};

const deleteProject: Parameters<typeof rest.delete>[1] = async (
  _,
  res,
  ctx,
) => {
  fakeProjectInfo.projectId = 0;
  fakeProjectInfo.projectName = '';
  fakeProjectInfo.startDate = '1000-01-01';
  fakeProjectInfo.endDate = '3000-01-01';

  return res(ctx.status(200));
};
