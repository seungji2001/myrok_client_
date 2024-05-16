import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const recordEditInfoBoxContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 560px;
  height: 200px;
  padding: 30px;

  background-color: ${Theme.color.white};
  border-radius: 20px;
  box-shadow: 0 10px 20px ${Theme.color.gray250};
`;

export const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const tagContainer = css`
  display: flex;
  flex-direction: column;
  height: 130px;
  gap: 2px;
`;

export const tagInputContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const inputStyling = css`
  font-size: 18px;
  font-weight: 800;
  border-radius: 4px;
  max-width: 462px;
  border: 1px solid ${Theme.color.gray200};

  &::placeholder {
    text-align: center;
  }
`;

export const tagsGrid = css`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  gap: 6px;

  max-width: 462px;
  max-height: 84px;
  overflow-y: auto;
`;

export const warningText = css`
  color: ${Theme.color.red};
  align-self: flex-end;
`;
