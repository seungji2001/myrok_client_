/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button/Button';
import Text from '~/components/common/Text/Text';
import { ROUTES } from '~/constants/routes';
import { useProject } from '~/hooks/useProject';
import { generateDateToStringFormat } from '~/utils/generateDateToStringFormat';
import * as S from '~/components/common/Header/Header.styles';
import UserInfoModal from '~/components/user/UserInfoModal/UserInfoModal';
import { useToast } from '~/components/common/Toast/useToast';
import { useGetInviteCode } from '~/hooks/@query/useGetInviteCode';

const Header = () => {
  const navigate = useNavigate();
  const { projectName, startDate, endDate, projectId } = useProject();
  const data = useGetInviteCode(projectId);
  const { showToast } = useToast();

  const handleCopyButtonClick = () => {
    if (data === undefined) {
      showToast('error', '잠시 후에 다시 시도해주세요');
      return;
    }

    const { inviteCode } = data;

    try {
      navigator.clipboard.writeText(inviteCode);
      showToast('success', '초대 코드가 복사되었습니다.');
    } catch (error) {
      showToast('error', '초대 코드 복사에 실패했습니다.');
    }
  };

  return (
    <header css={S.headerContainer}>
      <div css={S.infoContainer}>
        <div css={S.titleWrapper} onClick={() => navigate(ROUTES.DASH_BOARD)}>
          마이록
        </div>
        <Text
          weight="bold"
          css={S.projectNameText(
            projectName.length <= 10
              ? 'lg'
              : projectName.length <= 32
                ? 'md'
                : 'sm',
          )}
        >
          {projectName}
        </Text>
        {startDate && endDate && (
          <div css={S.dateWrapper}>
            <Text weight="bold">
              {generateDateToStringFormat(startDate)} ~{' '}
              {generateDateToStringFormat(endDate)}
            </Text>
          </div>
        )}
        <Button
          variant="primary"
          css={S.copyButton}
          onClick={handleCopyButtonClick}
        >
          초대코드
        </Button>
      </div>
      <UserInfoModal />
    </header>
  );
};

export default Header;
