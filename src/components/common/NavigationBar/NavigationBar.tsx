import { NavLink } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import * as S from './NavigationBar.styled';
import Text from '~/components/common/Text/Text';
import { HomeIcon, RecordIcon } from '~/assets/svg';

const NavigationBar = () => {
  return (
    <nav css={S.nav}>
      <div css={S.menuContainer}>
        <NavLink css={S.menuLink} to={ROUTES.DASH_BOARD}>
          <HomeIcon />
          <Text size="sm">대시보드</Text>
        </NavLink>
        <NavLink css={S.menuLink} to={ROUTES.MEETING_MINUTES}>
          <RecordIcon />
          <Text size="sm">회의록</Text>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
