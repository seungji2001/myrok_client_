import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '~/components/common/Pagination/Pagination';
/**
 * Page를 바꿀 수 있는 컴포넌트
 */
const meta = {
  title: 'common/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPage: {
      description: '전체 페이지 수',
    },
    currentPage: {
      description: '현재 보여주고 있는 페이지',
    },
    handlePageChange: {
      description: '페이지 이동 함수',
    },
  },
  args: {
    totalPage: 4,
    currentPage: 1,
    handlePageChange: (page: number) => {
      alert(`handlePageChange(${page});`);
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
