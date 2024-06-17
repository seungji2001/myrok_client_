/** @jsxImportSource @emotion/react */
import * as S from '~/pages/LandingPage/LandingPage.styles';
import Title from '~/components/common/Title/Title';
import LogInModal from '~/components/landing/LogInModal/LogInModal';
import IntroCard from '~/components/landing/IntroCard/IntroCard';
import { LOCAL_STORAGE } from '~/constants/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';

const LandingPage = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.PROJECT_HOLDER);
    }
  }, [navigate]);

  return (
    <div css={S.landingPageContainer}>
      <div css={S.titleAndLogInButtonContainer}>
        <Title />
        <LogInModal />
      </div>
      <IntroCard />
    </div>
  );
};

export default LandingPage;
