import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalReset } from '~/styles/GlobalReset';
import { Theme } from '~/styles/Theme';
import { serviceWorker } from '~/server/browser';
import { ToastProvider } from '~/components/common/Toast/ToastContext';
import AppRouter from '~/router/AppRouter';

// if (process.env.WORKER === 'on') {
//   serviceWorker.start({ onUnhandledRequest: 'bypass' });
// }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalReset} />
        <ToastProvider>
          <AppRouter />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
