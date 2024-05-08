import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button/Button';
import Modal from '~/components/common/Modal/Modal';
import Text from '~/components/common/Text/Text';
import { LOCAL_STORAGE } from '~/constants/api';
import { ROUTES } from '~/constants/routes';
import { useGetUserInfo } from '~/hooks/@query/useGetUserInfo';
import * as S from '~/components/user/UserInfoModal/UserInfoModal.styles';

const UserInfoModal = () => {
  const navigate = useNavigate();
  const { name, picture, email } = useGetUserInfo();

  const handleLogoutClick = () => {
    const isLogout = confirm('로그아웃 하시겠습니까?');

    if (!isLogout) {
      return;
    }

    alert('로그아웃 되었습니다.');
    localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN);

    navigate(ROUTES.ROOT);
  };

  return (
    <Modal>
      <Modal.Button variant="plain" act="open">
        <img
          css={S.userInfoModalButton}
          src={picture}
          alt={`${name}프로필 사진`}
        />
      </Modal.Button>
      <Modal.Layout css={S.userInfoModalLayoutStyling}>
        <Text size="xl" weight="bold">
          프로필
        </Text>
        <div css={S.useInfoContainer}>
          <img css={S.profileImg} src={picture} alt={`${name}프로필 사진`} />
          <Text size="xl">{name}</Text>
          <Text css={S.emailText}>{email}</Text>
          <Button
            css={S.logoutButton}
            variant="normal"
            onClick={handleLogoutClick}
          >
            로그아웃
          </Button>
        </div>
      </Modal.Layout>
    </Modal>
  );
};

export default UserInfoModal;
