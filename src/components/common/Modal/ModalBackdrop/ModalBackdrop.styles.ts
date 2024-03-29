import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';
import { fadeIn } from '~/styles/animation';

export const backdropStyling = css`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${Theme.zIndex.backdrop};

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.2s ease-in;
`;
