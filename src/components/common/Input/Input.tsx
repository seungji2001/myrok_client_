/** @jsxImportSource @emotion/react */
import * as S from './Input.styled';
import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  width: string;
  height: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { width, height, ...rest } = props;

  return <input css={S.inputWrapper(width, height)} ref={ref} {...rest} />;
});

Input.displayName = 'Input';

export default Input;
