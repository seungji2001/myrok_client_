import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const meetingMinutesRecordPageContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
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

export const recordWriteInfoBoxContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 300px;
  max-width: 460px;
  height: fit-content;
  gap: 20px;
  padding: 30px;

  background-color: ${Theme.color.white};
  border-radius: 20px;
  box-shadow: 0 10px 20px ${Theme.color.gray250};
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const tagContainer = css`
  display: flex;
  justify-content: space-between;
  max-height: 130px;
  gap: 2px;
`;

export const tagsGrid = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;

  max-width: 362px;
  max-height: 84px;
  overflow-y: auto;
`;

export const participantInfoBoxContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 460px;
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
  gap: 60px;

  height: 100%;
`;

export const writerButton = css`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  max-width: 460px;
`;

export const buttonStyling = css`
  font-weight: 900;
  width: 45%;
`;

export const deleteButtonStyling = css`
  font-weight: 900;
  width: 45%;
  border: 1px solid ${Theme.color.gray250};
`;
