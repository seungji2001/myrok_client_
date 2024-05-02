import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 600px;
`;

export const placeholderContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
`;

export const titleText = css`
  font-weight: 700;
  font-size: 28px;
  color: ${Theme.color.gray300};
`;

export const clickToAddText = css`
  font-weight: 500;
  font-size: 20px;
  color: ${Theme.color.gray300};
`;
