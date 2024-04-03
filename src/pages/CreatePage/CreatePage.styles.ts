import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';
import { slideLeft } from '~/styles/animation';

export const createPageContainer = css`
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

export const innerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 340px;
  height: 380px;
  gap: 10px;

  animation: ${slideLeft} 0.6s ease-in-out forwards;
`;

export const teamNameForm = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const bodyContainer = css`
  display: flex;
  flex-direction: column;

  gap: 22px;
  height: 224px;
`;

export const inputContainer = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const inputWrapper = css`
  width: 100%;
  height: 60px;

  border-radius: 14px;

  box-shadow:
    0 0 1px #1b1d1f33,
    0 15px 25px #1b1d1f33,
    0 5px 10px #1b1d1f1f;
`;

export const confirmButtonsContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const explainText = css`
  display: flex;

  color: ${Theme.color.gray800};
`;

export const titleText = css`
  display: flex;
  justify-content: center;

  width: 100%;

  font-size: 32px;
  color: ${Theme.color.primary};

  border-bottom: 1px solid ${Theme.color.primary};
`;

export const inputTitle = css`
  padding: 10px 20px;

  border: none;
  border-radius: 14px;
  background-color: ${Theme.color.white};

  font-size: 24px;
`;

export const submitButton = css`
  display: flex;
  justify-content: center;
  align-self: flex-end;

  width: 100px;
  border-radius: 10px;
`;

export const periodContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 10px;
`;

export const periodButton = css`
  font-size: 16px;
  color: ${Theme.color.gray800};
  border-bottom: 1px solid ${Theme.color.gray800};
`;

export const periodLocalInputContainer = css`
  display: flex;
  align-items: center;

  gap: 4px;
  margin-bottom: 4px;
`;

export const periodLocalInput = css`
  border-radius: 4px;

  text-align: center;
`;
