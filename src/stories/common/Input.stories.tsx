import type { Meta, StoryObj } from '@storybook/react';
import Input from '~/components/common/Input/Input';

/**
 * `Input` 은 공용 인풋 컴포넌트
 *
 */
const meta = {
  title: 'common/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '150px',
    height: '40px',
    placeholder: '예시 인풋입니다',
  },
};
