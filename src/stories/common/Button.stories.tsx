import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from '~/components/common/Button/Button';
import Button from '~/components/common/Button/Button';

/**
 * 공용 버튼 컴포넌트
 */

const meta = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'normal', 'plain'],
      control: { type: 'radio' },
      description:
        '버튼의 형태를 말하는 것으로 plain은 svg등 이미지를 이용한 스타일이 필요할 때 사용한다.',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'normal',
    size: 'md',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createButtonStory = (variant: ButtonProps['variant']) => ({
  args: {
    variant,
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
});

export const Default: Story = {};

export const Normal: Story = createButtonStory('normal');

export const Primary: Story = createButtonStory('primary');

export const Plain: Story = createButtonStory('plain');
