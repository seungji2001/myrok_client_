import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const participantInfoBoxContainer = css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-width: 560px;
  height: 160px;
  padding: 30px;

  background-color: ${Theme.color.white};
  border-radius: 20px;
  box-shadow: 0 10px 20px ${Theme.color.gray250};
`;

export const participantContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  max-width: 320px;
  max-height: 100px;
  overflow-y: auto;
`;

export const tagStyling = css`
  font-size: 16px;
  font-weight: 800;
`;
