import { rest } from 'msw';

export const userHandlers = () => {
  return [
    rest.post('/myrok/auth/google', postGoogleLogin),
    rest.get('/myrok/me/project', getUserProjectInfo),
  ];
};

const postGoogleLogin: Parameters<typeof rest.post>[1] = async (
  _,
  res,
  ctx,
) => {
  return res(
    ctx.status(201),
    ctx.json({
      loginUrl: '/login?accessToken=aaaa&refreshToken=bbbb',
    }),
  );
};

const getUserProjectInfo: Parameters<typeof rest.get>[1] = async (
  _,
  res,
  ctx,
) => {
  const randomNumber = (Math.floor(Math.random() * 10) % 3) % 2;

  const projectInfo = [{}, { projectId: 1, projectName: '우리의 프로젝트' }];
  return res(ctx.status(200), ctx.json(projectInfo[randomNumber]));
};
