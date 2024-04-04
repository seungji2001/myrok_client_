import type { Meta, StoryObj } from '@storybook/react';
import JoinPage from '~/pages/JoinPage/JoinPage';

/**
 * 프로젝트 참가 페이지
 */
const meta = {
  title: 'pages/JoinPage',
  component: JoinPage,
} satisfies Meta<typeof JoinPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
