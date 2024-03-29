import { css } from '@emotion/react';
import type { TextProps } from '~/components/common/Text/Text';

export const sizeStyling = (size: Required<TextProps>['size']) => {
  const style = {
    xxs: css({ fontSize: '10px' }),
    xs: css({ fontSize: '12px' }),
    sm: css({ fontSize: '14px' }),
    md: css({ fontSize: '16px' }),
    lg: css({ fontSize: '18px' }),
    xl: css({ fontSize: '20px' }),
    xxl: css({ fontSize: '22px' }),
  };

  return style[size];
};

export const weightStyling = (weight: Required<TextProps>['weight']) => {
  const style = {
    light: css({ fontWeight: 100 }),
    normal: css({ fontWeight: 400 }),
    semiBold: css({ fontWeight: 600 }),
    bold: css({ fontWeight: 800 }),
  };

  return style[weight];
};
