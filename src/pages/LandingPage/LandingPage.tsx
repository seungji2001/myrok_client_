/** @jsxImportSource @emotion/react */
import * as S from '~/pages/LandingPage/LandingPage.styles';
import Title from '~/components/common/Title/Title';
import LogInModal from '~/components/landing/LogInModal/LogInModal';
import IntroCard from '~/components/landing/IntroCard/IntroCard';

const LandingPage = () => {
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
