/** @jsxImportSource @emotion/react */
import { type ComponentPropsWithRef } from 'react';
import { Theme } from '~/styles/Theme';
import * as S from '~/components/common/Tag/Tag.styles';
import CheckTag from '~/components/common/Tag/CheckTag';
import DeleteTag from '~/components/common/Tag/DeleteTag';

export interface TagProps extends ComponentPropsWithRef<'span'> {
  content: string;
  act?: 'default' | 'delete' | 'check';
  color?: string;
  outLine?: boolean;
}

const Tag = (props: TagProps) => {
  const { content, color = Theme.color.gray250, outLine = false } = props;

  return <span css={S.tagWrapper(color, outLine)}>{content}</span>;
};

Tag.Check = CheckTag;
Tag.Delete = DeleteTag;

export default Tag;
