import type { Meta, StoryObj } from '@storybook/react';
import { context } from 'msw';
import Tag from '~/components/common/Tag/Tag';

/**
 * 공통 태그 컴포넌트
 */
const meta = {
  title: 'common/Tag',
  component: Tag,
  args: {
    content: '#태그',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Tag content="기본태그" />,
};

export const OutLine: Story = {
  render: () => <Tag content="기본태그" outLine={true} />,
};

export const CheckTag: Story = {
  render: () => (
    <Tag.Check
      act="check"
      handleTagCheck={() => alert('click!')}
      content={'기본태그'}
    />
  ),
};

export const DeleteTag: Story = {
  render: () => (
    <Tag.Delete
      act="delete"
      handleTagDelete={() => alert('delete')}
      content="삭제가능"
    />
  ),
};
