import { css } from '@emotion/react';
import type { ButtonProps } from '~/components/common/Button/Button';
import { Theme } from '~/styles/Theme';

export const getVariantStyling = (
  variant: Required<ButtonProps>['variant'],
) => {
  const style = {
    primary: css({
      backgroundColor: Theme.color.primary,

      color: Theme.color.white,

      '&:hover:enabled': {
        backgroundColor: Theme.color.primary500,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${Theme.color.primary500}`,
      },
    }),

    normal: css({
      backgroundColor: Theme.color.white,

      color: Theme.color.primary500,

      '&:hover:enabled': {
        backgroundColor: `${Theme.color.gray200}`,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${Theme.color.gray200}`,
      },
    }),

    plain: css({
      backgroundColor: 'transparent',

      color: Theme.color.black,

      '&:focus': {
        boxShadow: `0 0 0 3px ${Theme.color.gray200}`,
      },
    }),
  };

  return style[variant];
};

export const getSizeStyling = (
  size: Required<ButtonProps>['size'],
  variant: Required<ButtonProps>['variant'],
) => {
  const style = {
    lg: css({
      padding: `${variant !== 'plain' && '14px 16px'}`,
    }),
    md: css({
      padding: `${variant !== 'plain' && '12px 16px'}`,
    }),
    sm: css({
      padding: `${variant !== 'plain' && '8px 12px'}`,
    }),
  };

  return style[size];
};

export const buttonStyling = css`
  font-size: 16px;
  line-height: 16px;
  text-align: center;

  border: none;
  border-radius: 4px;

  transition: all 0.2s ease-in;

  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }
`;
