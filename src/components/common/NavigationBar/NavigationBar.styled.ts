import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const nav = css`
  display: flex;
  width: 80px;
  height: 100%;
  padding: 14px 4px;

  background-color: ${Theme.color.white};
  border-right: 2px solid ${Theme.color.gray250};
`;

export const menuContainer = css`
  display: flex;
  align-items: center;

  width: 100%;

  flex-direction: column;

  gap: 30px;
`;

export const menuLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 62px;
  height: 62px;
  padding: 4px;

  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${Theme.color.gray200};
  }

  & > span {
    margin-top: 3px;
    font-size: 13px;
  }

  &.active {
    background-color: ${Theme.color.gray200};
  }
`;

export const teamAddButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 62px;
  height: 62px;
  padding: 4px;

  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${Theme.color.gray200};
  }
`;

export const teamAddText = css`
  font-size: 11px;
`;
