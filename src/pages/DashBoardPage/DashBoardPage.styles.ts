import { css } from '@emotion/react';

export const dashBoardPageContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: calc(100% - 160px);
  width: 100%;
  gap: 100px;
`;

export const pieChartContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const tagsGrid = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;

  max-width: 400px;
  max-height: 84px;
  overflow-y: auto;
`;
