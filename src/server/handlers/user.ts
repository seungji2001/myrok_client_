import { rest } from 'msw';

export const userHandlers = () => {
  return [rest.post('/myrok/auth/google', postGoogleLogin)];
};

const postGoogleLogin: Parameters<typeof rest.post>[1] = async (
  req,
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
