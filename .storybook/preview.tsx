import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import { Theme } from '../src/styles/Theme';
import { GlobalReset } from '../src/styles/GlobalReset';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { handlers } from '../src/server/handlers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { ToastProvider } from '../src/components/common/Toast/ToastContext';

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: handlers(),
  },
};

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <Global styles={GlobalReset} />
          <ToastProvider>
            <Story />
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
  ),
  mswDecorator,
];
export default preview;
