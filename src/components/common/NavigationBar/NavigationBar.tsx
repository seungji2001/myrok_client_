import { NavLink } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import * as S from './NavigationBar.styled';
import Text from '~/components/common/Text/Text';
import { ExitIcon, HomeIcon, RecordIcon } from '~/assets/svg';
import TeamExitModal from '~/components/user/TeamExitModal/TeamExitModal';

const NavigationBar = () => {
  return (
    <nav css={S.nav}>
      <div css={S.menuContainer}>
        <div css={S.menuInnerContainer}>
          <NavLink css={S.menuLink} to={ROUTES.DASH_BOARD}>
            <HomeIcon />
            <Text size="sm">대시보드</Text>
          </NavLink>
          <NavLink css={S.menuLink} to={ROUTES.MEETING_MINUTES}>
            <RecordIcon />
            <Text size="sm">회의록</Text>
          </NavLink>
        </div>
        <TeamExitModal />
      </div>
    </nav>
  );
};

export default NavigationBar;
