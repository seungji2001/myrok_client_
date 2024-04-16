import { Outlet } from 'react-router-dom';
import './App.css';
import { useResetError } from '~/hooks/useResetError';
import ErrorBoundary from '~/components/common/ErrorBoundary/ErrorBoundary';
import Error from '~/components/common/Error/Error';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

function App() {
  const { handleErrorReset } = useResetError();

  return (
    <QueryErrorResetBoundary>
      <ErrorBoundary Fallback={Error} onReset={handleErrorReset}>
        <Outlet />
      </ErrorBoundary>
    </QueryErrorResetBoundary>
  );
}

export default App;
