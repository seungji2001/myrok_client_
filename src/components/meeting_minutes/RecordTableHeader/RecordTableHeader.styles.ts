import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const recordTableHeaderContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const menuHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;
  padding: 8px;
`;

export const recordSearchInput = css`
  border-radius: 10px;
  font-size: 18px;
`;

export const recordAddButton = css`
  font-weight: 800;

  border-radius: 14px;
`;

export const recordSearchButton = css`
  margin-left: 10px;
  font-weight: 800;
  border-radius: 8px;
`;

export const sortMenuContainer = css`
  display: flex;
  align-self: end;
  gap: 10px;
`;

export const divider = css`
  width: 1px;
  height: 24px;

  background-color: ${Theme.color.gray300};
`;
