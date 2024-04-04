import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from '~/constants/routes';
import { LOCAL_STORAGE } from '~/constants/api';

const LoginPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const accessToken = params.get('accessToken');
  const refreshToken = params.get('refreshToken');

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN);
      navigate(ROUTES.ROOT);
      alert('로그인이 필요합니다.');

      return;
    }
  }, []);

  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, accessToken);
      localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, refreshToken);

      navigate(ROUTES.START);
    }
  }, []);

  return <></>;
};

export default LoginPage;
