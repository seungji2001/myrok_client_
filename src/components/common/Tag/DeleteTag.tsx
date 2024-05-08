/** @jsxImportSource @emotion/react */
import { type ForwardedRef, forwardRef } from 'react';
import { CloseSmIcon } from '~/assets/svg';
import Button from '~/components/common/Button/Button';
import { type TagProps } from '~/components/common/Tag/Tag';
import * as S from '~/components/common/Tag/Tag.styles';
import { Theme } from '~/styles/Theme';

interface DeleteTagProps extends TagProps {
  act: 'delete';
  handleTagDelete: () => void;
}

const DeleteTag = (
  props: DeleteTagProps,
  ref: ForwardedRef<HTMLSpanElement>,
) => {
  const {
    content,
    color = Theme.color.gray250,
    outLine = false,
    handleTagDelete,
    ...attribute
  } = props;

  return (
    <span css={S.tagWrapper(color, outLine)} ref={ref} {...attribute}>
      {content}

      <Button
        css={S.deleteTagButton(color, outLine)}
        variant="plain"
        onClick={handleTagDelete}
      >
        <CloseSmIcon />
      </Button>
    </span>
  );
};

export default forwardRef(DeleteTag);
