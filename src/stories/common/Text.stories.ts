import type { Meta, StoryObj } from '@storybook/react';
import Text, { type TextProps } from '~/components/common/Text/Text';

/**
 * 글의 사이즈와 두께를 고를 수 있는 컴포넌트
 */
const meta = {
  title: 'common/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'radio' },
      description: '글자 크기 조절',
    },
    weight: {
      options: ['light', 'normal', 'semiBold', 'bold'],
      control: { type: 'radio' },
      description: '글자 두께 조절',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

const createTextStory = (
  size: TextProps['size'],
  weight: TextProps['weight'],
) => ({
  args: {
    size,
    weight,
    children: '안녕하세요',
  },
  argTypes: {
    size: {
      control: false,
    },
    weight: {
      control: false,
    },
  },
});

export const Default: Story = {
  args: {
    children: '안녕하세요',
  },
};

export const XXSmall: Story = createTextStory('xxs', 'normal');

export const XSmall: Story = createTextStory('xs', 'normal');

export const Small: Story = createTextStory('sm', 'normal');

export const Medium: Story = createTextStory('md', 'normal');

export const Large: Story = createTextStory('lg', 'normal');

export const XLarge: Story = createTextStory('xl', 'normal');

export const XXLarge: Story = createTextStory('xxl', 'normal');

export const Light: Story = createTextStory('md', 'light');

export const Normal: Story = createTextStory('md', 'normal');

export const SemiBold: Story = createTextStory('md', 'semiBold');

export const Bold: Story = createTextStory('md', 'bold');
