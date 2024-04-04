import type { Meta, StoryObj } from '@storybook/react';
import StartPage from '~/pages/StartPage/StartPage';

/**
 * 프로젝트 생성/참가 고르는 페이지
 */
const meta = {
  title: 'pages/StartPage',
  component: StartPage,
} satisfies Meta<typeof StartPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
