import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';
import { slideRight } from '~/styles/animation';

export const startPageContainer = css`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 90vh;
  padding: 20px 40px;
`;

export const mainContainer = css`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: flex-end;

  height: 100%;
  padding-right: 120px;
`;

export const titleWrapper = css`
  position: fixed;
  display: inline-block;
  overflow: hidden;

  top: calc(40vh - 100px);
`;

export const innerContainer = (clickedButton: string | undefined) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 340px;
  height: 460px;

  animation: ${clickedButton && slideRight} 0.6s ease-in-out forwards;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const explainText = css`
  color: ${Theme.color.gray800};
`;

export const startTeamButton = () => css`
  width: 100%;
  height: 70px;
  padding: 16px 80px;

  border-radius: 14px;

  font-size: 32px;
  font-weight: 600;

  box-shadow:
    0 0 1px #1b1d1f33,
    0 15px 25px #1b1d1f33,
    0 5px 10px #1b1d1f1f;
`;
