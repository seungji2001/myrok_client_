import type { Meta, StoryObj } from '@storybook/react';
import Toast from '~/components/common/Toast/Toast';

/**
 * 공통 토스트 컴포넌트
 */
const meta = {
  title: 'common/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: '고유번호',
    },
    status: {
      option: ['success', 'error'],
      description: '어떤 상태일 때 사용할 것인지에 대한 여부',
    },
    message: {
      description: '토스트에 표시할 문구',
    },
    isActive: {
      description: '토스트 생명주기에 대한 여부',
    },
  },
  args: {
    id: '1',
    status: 'success',
    message: '기본 Toast입니다.',
    isActive: true,
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ErrorToast: Story = {
  args: {
    id: '2',
    status: 'error',
    message: '에러 Toast입니다.',
    isActive: true,
  },
};
