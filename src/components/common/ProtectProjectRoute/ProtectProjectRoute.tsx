import { Outlet, useNavigate } from 'react-router-dom';
import Error from '~/components/common/Error/Error';
import { HTTP_STATUS_CODE, LOCAL_STORAGE } from '~/constants/api';
import { ROUTES } from '~/constants/routes';
import { useProject } from '~/hooks/useProject';

const ProtectProjectRoute = () => {
  const { projectId } = useProject();
  const navigate = useNavigate();

  if (projectId !== 0)
    return (
      <Error
        statusCode={HTTP_STATUS_CODE.NOT_ACCEPTABLE}
        resetError={() => {
          navigate(ROUTES.DASH_BOARD);
        }}
      />
    );

  return <Outlet />;
};

export default ProtectProjectRoute;
