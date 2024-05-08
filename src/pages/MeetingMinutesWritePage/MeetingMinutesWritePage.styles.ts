import { css } from '@emotion/react';

export const meetingMinutesWritePageContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: calc(100% - 160px);
`;

export const textEditorWrapper = css`
  width: 60%;
`;

export const infoContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(40% - 60px);
  height: 100%;
`;

export const writeButton = css`
  align-self: flex-end;
  width: 150px;
  height: 50px;

  font-size: 24px;
  font-weight: bold;

  border-radius: 14px;
`;
