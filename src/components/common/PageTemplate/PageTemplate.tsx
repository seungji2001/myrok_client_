import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/common/Header/Header';
import { Theme } from '~/styles/Theme';

const pageContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: hidden;

  background-color: ${Theme.color.gray50};
`;

const PageTemplate = () => {
  return (
    <div css={pageContainer}>
      <Header />
      <Outlet />
    </div>
  );
};

export default PageTemplate;
