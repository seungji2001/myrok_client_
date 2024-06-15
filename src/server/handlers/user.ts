import { rest } from 'msw';
import { userInfo } from '~/server/mocks/user';

export const userHandlers = () => {
  return [
    rest.get('/myrok/auth/google', getGoogleLogin),
    rest.get('/myrok/me/project', getUserProjectInfo),
    rest.get('/myrok/me', getUserInfo),
  ];
};

export const fakeProjectInfo = {
  projectId: 1,
  projectName: '우리의 프로젝트',
  startDate: '1000-01-01',
  endDate: '3000-01-01',
};

const getGoogleLogin: Parameters<typeof rest.post>[1] = async (_, res, ctx) => {
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

  const projectInfo = [{}, fakeProjectInfo];

  if (fakeProjectInfo.projectId === 1) {
    // return res(ctx.status(200), ctx.json(projectInfo[randomNumber]));
    // return res(
    //   ctx.status(401),
    //   ctx.json({ statusCode: 40100, message: '응애잘못되었다', code: 'C001' }),
    // );
  }

  return res(ctx.status(200), ctx.json(fakeProjectInfo));
  // return res(
  //   ctx.status(401),
  //   ctx.json({ statusCode: 40100, message: '응애잘못되었다', code: 'C001' }),
  // );
};

const getUserInfo: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(userInfo));
};
