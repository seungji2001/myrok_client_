import type { Meta, StoryObj } from '@storybook/react';
import CreatePage from '~/pages/CreatePage/CreatePage';

/**
 * 프로젝트 생성 페이지
 */
const meta = {
  title: 'pages/CreatePage',
  component: CreatePage,
} satisfies Meta<typeof CreatePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
