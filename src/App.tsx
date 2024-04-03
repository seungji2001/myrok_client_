import { Outlet } from 'react-router-dom';
import './App.css';
import { useResetError } from '~/hooks/useResetError';
import ErrorBoundary from '~/components/common/ErrorBoundary/ErrorBoundary';
import Error from '~/components/common/Error/Error';

function App() {
  const { handleErrorReset } = useResetError();

  return (
    <ErrorBoundary Fallback={Error} onReset={handleErrorReset}>
      <Outlet />
    </ErrorBoundary>
  );
}

export default App;
