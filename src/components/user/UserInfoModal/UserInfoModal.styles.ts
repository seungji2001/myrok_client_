import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const userInfoModalButton = css`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  object-fit: cover;
`;

export const profileImg = css`
  width: 200px;
  height: 200px;
  margin: 10px auto;

  border-radius: 50%;
  object-fit: cover;
`;

export const userInfoModalLayoutStyling = css`
  position: fixed;
  overflow: hidden;
  top: 60px;
  left: calc(100% - 320px);

  width: 240px;
  height: 380px;
  padding: 20px 30px;

  border-radius: 8px;
  background-color: ${Theme.color.white};
`;

export const useInfoContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const emailText = css`
  color: ${Theme.color.gray700};
`;

export const logoutButton = css`
  border: 1px solid ${Theme.color.primary};
`;
