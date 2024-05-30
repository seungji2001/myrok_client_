import { useNavigate } from 'react-router-dom';
import Error from '~/components/common/Error/Error';
import { LOCAL_STORAGE } from '~/constants/api';
import { ROUTES } from '~/constants/routes';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const isLogin = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)
    ? true
    : false;

  return (
    <Error
      resetError={() => navigate(isLogin ? ROUTES.DASH_BOARD : ROUTES.ROOT)}
    />
  );
};

export default NotFoundPage;
