import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const container = css`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 100%;
  max-height: 650px;
`;

export const menuHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;
  padding: 8px;
`;

export const sortMenuContainer = css`
  display: flex;
  align-self: flex-end;
  gap: 10px;
`;

export const divider = css`
  width: 1px;
  height: 24px;

  background-color: ${Theme.color.gray300};
`;

export const tableContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100% - 70px);
  padding: 30px;

  background-color: ${Theme.color.white};

  box-shadow: 0 10px 20px ${Theme.color.gray250};
`;

export const tableHeader = css`
  width: calc(100% - 32px);
  height: 50px;
`;

export const tableBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const table = css`
  width: 100%;
`;

export const recordTableTitle = css`
  font-size: 28px;
`;

export const recordAddButton = css`
  font-weight: 800;

  border-radius: 14px;
`;

export const tableProperties = css`
  font-size: 18px;

  table-layout: fixed;

  & td {
    display: table-cell;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;

    height: 48px;
    padding: 8px;
  }

  tbody > tr {
    cursor: pointer;
  }

  thead > tr {
    border-bottom: 2px solid ${Theme.color.gray100};
  }

  thead > tr > th:first-of-type() {
    width: 60%;
  }

  thead > tr > th:nth-of-type(2) {
    text-align: center;
    width: 20%;
  }

  thead > tr > th:nth-of-type(3) {
    text-align: center;
    width: 20%;
  }

  & tr :not(:first-of-type),
  thead > tr > th {
    text-align: center;
  }
`;
