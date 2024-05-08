import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';
import type { Size } from '~/types/size';

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 28px);
  height: 58px;
  padding: 0 14px;

  border-bottom: 2px solid ${Theme.color.gray250};
`;

export const titleWrapper = css`
  font-size: 26px;
  font-weight: 900;
  color: ${Theme.color.primary};
  cursor: pointer;
`;

export const infoContainer = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const dateWrapper = css`
  margin-top: 16px;
`;

export const copyButton = css`
  padding: 10px;

  font-weight: 900;
  border-radius: 10px;
`;

export const projectNameText = (size: Extract<Size, 'sm' | 'md' | 'lg'>) => {
  const style = {
    sm: css({
      display: '-webkit-box',
      fontSize: '16px',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
    }),
    md: css({
      display: '-webkit-box',
      fontSize: '24px',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
    }),
    lg: css({
      display: 'block',
      fontSize: '34px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }),
  };

  return css`
    max-width: 300px;
    max-height: 50px;

    overflow: hidden;
    ${style[size]}
  `;
};
