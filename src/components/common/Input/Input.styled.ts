import type { CSSProperties } from 'react';
import { css } from '@emotion/react';
import { Theme } from '~/styles/Theme';

export const inputWrapper = (
  width: CSSProperties['width'],
  height: CSSProperties['height'],
) => css`
  width: ${width};
  height: ${height};
  padding: 6px;

  border: 1px solid ${Theme.color.gray200};

  font-size: 14px;
`;
