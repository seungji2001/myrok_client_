import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const meetingMinutesEditPageContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: calc(100% - 160px);
`;

export const recordDetailContainer = css`
  width: 60%;
  min-height: 400px;
  max-height: 700px;
  overflow-y: auto;
  padding: 10px;

  background-color: ${Theme.color.white};
  border-radius: 12px;
  border: 1px solid ${Theme.color.gray200};
`;

export const participantInfoBoxContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 560px;
  max-height: 160px;
  padding: 30px;

  background-color: ${Theme.color.white};
  border-radius: 20px;
  box-shadow: 0 10px 20px ${Theme.color.gray250};
`;

export const participantContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  max-width: 220px;
  max-height: 100px;
  overflow-y: auto;
`;

export const tagStyling = css`
  padding: 10px 20px;

  font-size: 20px;
  font-weight: 800;
`;

export const infoContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(40% - 60px);
  height: 100%;
`;

export const writerButton = css`
  align-self: flex-end;
  width: 150px;
  height: 50px;

  font-size: 24px;
  font-weight: bold;

  border-radius: 14px;
`;
