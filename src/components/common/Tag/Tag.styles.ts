import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';
import { generateDarkenHex } from '~/utils/generateDarkenHex';

export const tagWrapper = (color: string, outLine: boolean) => {
  const style = {
    backGround: css({
      backgroundColor: color,
      color: Theme.color.white,
    }),
    border: css({
      backgroundColor: Theme.color.white,
      color: color,
      border: `1px solid ${color}`,
    }),
  };

  return css`
    display: flex;
    gap: 6px;
    padding: 4px 10px;

    width: fit-content;
    height: fit-content;

    border-radius: 4px;

    ${outLine ? style['border'] : style['backGround']}
  `;
};

export const checkTagWrapper = (
  color: string,
  outLine: boolean,
  isChecked: boolean,
) => {
  color = isChecked ? generateDarkenHex(color, 80) : color;

  return css`
    cursor: pointer;
    ${tagWrapper(color, outLine)}
  `;
};
export const deleteTagButton = (color: string, outLine: boolean) => css`
  svg path {
    fill: ${outLine ? color : Theme.color.white};
  }
`;
