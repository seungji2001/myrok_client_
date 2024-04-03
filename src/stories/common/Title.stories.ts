import type { Meta, StoryObj } from '@storybook/react';
import Title from '~/components/common/Title/Title';

/**
 * 마이록 타이틀 컴포넌트
 */
const meta = {
  title: 'common/Title',
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
