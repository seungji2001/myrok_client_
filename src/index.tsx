import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalReset } from '~/styles/GlobalReset';
import App from '~/App';
import { Theme } from '~/styles/Theme';
import { serviceWorker } from '~/server/browser';
import { ToastProvider } from '~/components/common/Toast/ToastContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import LandingPage from '~/pages/LandingPage/LandingPage';
import StartPage from '~/pages/StartPage/StartPage';
import CreatePage from '~/pages/CreatePage/CreatePage';
import JoinPage from '~/pages/JoinPage/JoinPage';

if (process.env.WORKER === 'on') {
  serviceWorker.start({ onUnhandledRequest: 'bypass' });
}

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <App />,
    children: [
      { path: '', element: <LandingPage /> },
      { path: ROUTES.START, element: <StartPage /> },
      { path: ROUTES.CREATE, element: <CreatePage /> },
      { path: ROUTES.JOIN, element: <JoinPage /> },
    ],
  },
]);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalReset} />
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
