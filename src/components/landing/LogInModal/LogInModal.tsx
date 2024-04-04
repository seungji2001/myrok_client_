/** @jsxImportSource @emotion/react */
import { googleLogo } from '~/assets/png';
import { CloseBoldIcon } from '~/assets/svg';
import Button from '~/components/common/Button/Button';
import Modal from '~/components/common/Modal/Modal';
import Text from '~/components/common/Text/Text';
import * as S from '~/components/landing/LogInModal/LogInModal.styles';
import { Theme } from '~/styles/Theme';

const LogInModal = () => {
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
          <Button css={S.googleLoginButtonContainer}>
            <img css={S.googleImg} src={googleLogo} alt="구글로고" />
            Google 계정으로 로그인하기
          </Button>
        </div>
      </Modal.Layout>
    </Modal>
  );
};

export default LogInModal;
