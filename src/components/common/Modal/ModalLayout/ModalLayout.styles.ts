import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';
import { fadeIn } from '~/styles/animation';

export const modalLayoutContainer = css`
  display: block;
  z-index: ${Theme.zIndex.modal};

  box-shadow:
    0 0 1px #1b1d1f33,
    0 15px 25px #1b1d1f33,
    0 5px 10px #1b1d1f1f;

  animation: ${fadeIn} 0.2s ease-in 0.05s forwards;
  opacity: 0;
`;
