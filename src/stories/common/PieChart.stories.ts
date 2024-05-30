import type { Meta, StoryObj } from '@storybook/react';
import PieChart from '~/components/common/PieChart/PieChart';
import { Theme } from '~/styles/Theme';

/**
 * 원형 그래프 컴포넌트
 */
const meta = {
  title: 'common/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  args: {
    radius: 120,
    data: [
      {
        label: '태그1',
        percentage: 24,
      },
      {
        label: '태그2',
        percentage: 24,
      },
      {
        label: '태그3',
        percentage: 24,
      },
      {
        label: '태그4',
        percentage: 24,
      },
      {
        label: '기타',
        percentage: 4,
      },
    ],
  },
} satisfies Meta<typeof PieChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FourTags: Story = {
  args: {
    data: [
      {
        label: '태그1',
        percentage: 26,
      },
      {
        label: '태그2',
        percentage: 24,
      },
      {
        label: '태그3',
        percentage: 24,
      },
      {
        label: '태그4',
        percentage: 24,
      },
    ],
  },
};

export const ThreeTags: Story = {
  args: {
    data: [
      {
        label: '태그1',
        percentage: 52,
      },
      {
        label: '태그2',
        percentage: 24,
      },
      {
        label: '태그3',
        percentage: 24,
      },
    ],
  },
};

export const TwoTags: Story = {
  args: {
    data: [
      {
        label: '태그1',
        percentage: 76,
      },
      {
        label: '태그2',
        percentage: 24,
      },
    ],
  },
};

export const OneTags: Story = {
  args: {
    data: [
      {
        label: '태그1',
        percentage: 100,
      },
    ],
  },
};

export const NoTags: Story = {
  args: {
    data: [],
  },
};
