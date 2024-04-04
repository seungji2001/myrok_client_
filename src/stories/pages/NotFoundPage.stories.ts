import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';

/**
 * 404 페이지
 */
const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
