import { useNavigate } from 'react-router-dom';
import Error from '~/components/common/Error/Error';
import { ROUTES } from '~/constants/routes';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return <Error resetError={() => navigate(ROUTES.ROOT)} />;
};

export default NotFoundPage;
