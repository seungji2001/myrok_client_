/** @jsxImportSource @emotion/react */
import { googleLogo } from '~/assets/png';
import { CloseBoldIcon } from '~/assets/svg';
import Button from '~/components/common/Button/Button';
import Modal from '~/components/common/Modal/Modal';
import Text from '~/components/common/Text/Text';
import { useToast } from '~/components/common/Toast/useToast';
import * as S from '~/components/landing/LogInModal/LogInModal.styles';
import { usePostGoogleLogin } from '~/hooks/@query/usePostGoogleLogin';
import { Theme } from '~/styles/Theme';

const LogInModal = () => {
  const { mutateGoogleLogin } = usePostGoogleLogin();
  const { showToast } = useToast();

  const handleGoogleLoginClick = () => {
    mutateGoogleLogin(undefined, {
      onSuccess: (data) => {
        const { loginUrl } = data;
        if (loginUrl === undefined) {
          showToast('error', '문제가 발생했습니다. 잠시 후 다시 시도해주세요');

          return;
        }
        window.location.href = loginUrl;
      },
    });
  };

  return (
    <Modal>
      <Modal.Button act="open" variant="primary" css={S.logInModalButton}>
        마이록 시작하기
      </Modal.Button>
      <Modal.Backdrop />
      <Modal.Layout isBackdropClosable={false} css={S.logInModalLayoutStyling}>
        <div css={S.logInModalHeader}>
          <div css={{ width: '32px' }} />
          <div css={S.logInModalTitle}>
            <Text
              size="xxl"
              weight="bold"
              css={{ color: `${Theme.color.primary}` }}
            >
              마이록
            </Text>
            <Text size="xxl" weight="bold">
              로그인
            </Text>
          </div>
          <Modal.Button variant="plain" act="close">
            <CloseBoldIcon />
          </Modal.Button>
        </div>
        <div css={S.logInButtonWrapper}>
          <Button
            css={S.googleLoginButtonContainer}
            onClick={handleGoogleLoginClick}
          >
            <img css={S.googleImg} src={googleLogo} alt="구글로고" />
            Google 계정으로 로그인하기
          </Button>
        </div>
      </Modal.Layout>
    </Modal>
  );
};

export default LogInModal;
