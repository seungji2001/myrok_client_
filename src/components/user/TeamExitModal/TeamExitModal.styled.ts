import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const modalContainer = css`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: ${Theme.zIndex.modal};

  width: 500px;
  padding: 18px 22px;

  border-radius: 10px;
  background-color: ${Theme.color.white};
  box-shadow:
    0 0 1px #1b1d1f33,
    0 15px 25px #1b1d1f33,
    0 5px 10px #1b1d1f1f;

  transform: translate(-50%, -50%);
`;

export const header = css`
  display: flex;
  width: 100%;
  height: 34px;
  margin-bottom: 18px;

  border-bottom: 1px solid ${Theme.color.gray300};
`;

export const body = css`
  display: flex;
  flex-direction: column;

  height: 100%;
  row-gap: 22px;

  & > label {
    display: flex;
    flex-direction: column;
    align-items: center;

    row-gap: 26px;
  }
`;

export const buttonContainer = css`
  display: flex;

  column-gap: 10px;
  margin-left: auto;
`;

export const exitButton = css`
  display: flex;
  align-items: center;

  padding: 8px;
  gap: 2px;
  margin: 0 auto;
`;

export const strongContent = css`
  text-decoration: underline;
`;

export const closeButton = css`
  width: 28px;
  height: 28px;
  padding: 0;
  margin-bottom: 4px;
  margin-left: auto;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const exitLink = css`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  flex-direction: column;

  width: 50px;
  height: 50px;
  padding: 4px;

  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${Theme.color.gray200};
  }

  & > span {
    margin-top: 3px;
  }

  &.active {
    background-color: ${Theme.color.gray200};
  }
`;

export const teamNameInput = css`
  padding: 0 10px;

  font-size: 16px;

  border-radius: 4px;
  border: 1px solid ${Theme.color.gray300};
`;

export const explainText = css`
  display: flex;
  gap: 6px;
`;
