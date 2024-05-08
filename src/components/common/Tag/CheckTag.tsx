/** @jsxImportSource @emotion/react */
import { forwardRef, useState, type ForwardedRef } from 'react';
import { type TagProps } from '~/components/common/Tag/Tag';
import { Theme } from '~/styles/Theme';
import * as S from '~/components/common/Tag/Tag.styles';

interface CheckTagProps extends TagProps {
  act: 'check';
  handleTagCheck: () => void;
}

const CheckTag = (props: CheckTagProps, ref: ForwardedRef<HTMLSpanElement>) => {
  const {
    content,
    color = Theme.color.gray250,
    outLine = false,
    handleTagCheck,
    ...attribute
  } = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <span
      css={S.checkTagWrapper(color, outLine, isChecked)}
      onClick={() => {
        setIsChecked((prev) => !prev);
        handleTagCheck();
      }}
      ref={ref}
      {...attribute}
    >
      {content}
    </span>
  );
};

export default forwardRef(CheckTag);
