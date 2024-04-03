import { css } from '@emotion/react';

export const errorContainerStyling = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const errorHeadingStyling = css`
  font-size: 30px;
`;

export const errorTextStyling = css`
  width: 300px;
  margin-top: 10px;

  text-align: center;
`;

export const errorButtonStyling = css`
  width: 300px;
  margin-top: 30px;
`;
