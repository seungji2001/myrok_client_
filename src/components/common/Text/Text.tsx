/** @jsxImportSource @emotion/react */
import type { Size } from '~/types/size';
import type { ComponentPropsWithoutRef } from 'react';
import * as S from '~/components/common/Text/Text.styles';

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
  size?: Size;
  weight?: 'light' | 'normal' | 'semiBold' | 'bold';
}

const Text = (props: TextProps) => {
  const { size = 'md', weight = 'normal', children, ...attributes } = props;

  return (
    <p css={[S.sizeStyling(size), S.weightStyling(weight)]} {...attributes}>
      {children}
    </p>
  );
};

export default Text;
