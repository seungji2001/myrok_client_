/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '~/components/common/Header/Header';

const pageContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: hidden;
`;

const DashBoardPage = () => {
  return (
    <div css={pageContainer}>
      <Header />
    </div>
  );
};

export default DashBoardPage;
