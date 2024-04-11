import { rest } from 'msw';
import { fakeProjectInfo } from '~/server/handlers/user';

export const projectHandlers = () => {
  return [rest.post('/myrok/project', postCreateProject)];
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
