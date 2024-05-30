import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const tagListMenuContainer = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 150px;
  height: 602px;

  overflow-y: auto;
  background-color: ${Theme.color.white};
  box-shadow: 0 10px 20px ${Theme.color.gray200};
  border-radius: 6px;
  padding: 14px;
`;

export const borderBottom = css`
  padding-bottom: 6px;
  border-bottom: 1px solid ${Theme.color.gray300};
`;

export const clickedText = css`
  font-weight: 800;
  color: ${Theme.color.primary};
`;

export const cursorPoint = css`
  cursor: pointer;
`;
