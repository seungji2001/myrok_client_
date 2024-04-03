import * as S from '~/pages/LandingPage/LandingPage.styles';
import Title from '~/components/common/Title/Title';
import LogInModal from '~/components/landing/LogInModal/LogInModal';

const LandingPage = () => {
  return (
    <div css={S.landingPageContainer}>
      <div css={S.titleAndLogInButtonContainer}>
        <Title />
        <LogInModal />
      </div>
    </div>
  );
};

export default LandingPage;
