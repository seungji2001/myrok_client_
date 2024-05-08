/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button/Button';
import Text from '~/components/common/Text/Text';
import { ROUTES } from '~/constants/routes';
import { useProject } from '~/hooks/useProject';
import { generateDateToStringFormat } from '~/utils/generateDateToStringFormat';
import * as S from '~/components/common/Header/Header.styles';
import UserInfoModal from '~/components/user/UserInfoModal/UserInfoModal';

const Header = () => {
  const navigate = useNavigate();
  const { projectName, startDate, endDate } = useProject();

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
        <Button variant="primary" css={S.copyButton}>
          초대코드
        </Button>
      </div>
      <UserInfoModal />
    </header>
  );
};

export default Header;
