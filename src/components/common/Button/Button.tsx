/** @jsxImportSource @emotion/react */
import type { Size } from '~/types/size';
import {
  forwardRef,
  type ComponentPropsWithRef,
  type ForwardedRef,
} from 'react';
import {
  buttonStyling,
  getSizeStyling,
  getVariantStyling,
} from '~/components/common/Button/Button.styles';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
  variant?: 'primary' | 'normal' | 'plain';
}

const Button = (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    size = 'md',
    variant = 'normal',
    children,
    type = 'button',
    ...attributes
  } = props;

  return (
    <button
      css={[
        getSizeStyling(size, variant),
        getVariantStyling(variant),
        buttonStyling,
      ]}
      ref={ref}
      type={type}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
