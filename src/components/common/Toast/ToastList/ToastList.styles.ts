import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const toastListContainer = css`
  position: fixed;
  left: 50%;
  bottom: 40px;

  display: flex;
  flex-direction: column-reverse;

  row-gap: 10px;

  transform: translateX(-50%);

  z-index: ${Theme.zIndex.toast};
`;
