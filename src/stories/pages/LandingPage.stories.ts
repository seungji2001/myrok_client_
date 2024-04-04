import type { Meta, StoryObj } from '@storybook/react';
import LandingPage from '~/pages/LandingPage/LandingPage';

/**
 * 서비스 메인 페이지
 */
const meta = {
  title: 'pages/LandingPage',
  component: LandingPage,
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
