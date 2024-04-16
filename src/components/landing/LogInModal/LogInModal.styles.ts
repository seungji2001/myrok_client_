/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const logInModalButton = css`
  width: 250px;
  height: 70px;

  font-size: 24px;
  font-weight: 800;
`;

export const logInModalLayoutStyling = css`
  position: fixed;
  top: 50%;
  left: 50%;

  width: 400px;
  height: 220px;
  max-width: 100%;
  padding: 18px;

  border-radius: 12px;
  background-color: ${Theme.color.white};

  transform: translate(-50%, -50%);
`;

export const logInModalHeader = css`
  display: flex;
  justify-content: space-between;
`;

export const logInModalTitle = css`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const logInButtonWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 160px;
`;

export const googleLoginButtonContainer = css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 300px;
  height: 60px;

  border: 1px solid ${Theme.color.gray200};
  border-radius: 12px;
  background-color: ${Theme.color.white};
  color: ${Theme.color.black};
  font-weight: 600;

  box-shadow: 0 12px 20px ${Theme.color.gray200};
  transition: 0.25s;
`;

export const googleImg = css`
  width: 26px;
  height: 27px;
`;
