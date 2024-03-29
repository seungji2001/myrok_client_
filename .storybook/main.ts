import type { StorybookConfig } from '@storybook/react-webpack5';
import type { RuleSetRule } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve!.plugins = [new TsconfigPathsPlugin()];

    const assetRules = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      return test.test('.svg');
    }) as RuleSetRule;

    assetRules.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};
export default config;
