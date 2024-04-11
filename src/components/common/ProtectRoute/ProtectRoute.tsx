import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE } from '~/constants/api';
import { ROUTES } from '~/constants/routes';
import { ProjectProvider } from '~/context/ProjectContext';
import { useGetUserProjectInfo } from '~/hooks/@query/useGetUserProjectInfo';

const ProtectRoute = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  const { projectInfo, isFetched } = useGetUserProjectInfo();

  useEffect(() => {
    if (!accessToken) {
      localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN);
      alert('로그인이 필요합니다.');
      navigate(ROUTES.ROOT);
    }
  }, []);

  useEffect(() => {
    if (isFetched) {
      if (projectInfo.projectId === 0) navigate(ROUTES.START);
    }
  }, [isFetched]);

  return (
    <ProjectProvider>
      <Outlet />
    </ProjectProvider>
  );
};

export default ProtectRoute;
