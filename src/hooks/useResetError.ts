import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { HTTPError } from '~/apis/HTTPError';
import { HTTP_STATUS_CODE } from '~/constants/api';
import { ROUTES } from '~/constants/routes';

export const useResetError = () => {
  const navigate = useNavigate();
  const { reset } = useQueryErrorResetBoundary();

  const handleErrorReset = useCallback(
    (error: Error | HTTPError) => {
      reset();

      if (error instanceof Error && !(error instanceof HTTPError)) {
        navigate(ROUTES.ROOT);

        return;
      }

      if (error.statusCode === HTTP_STATUS_CODE.NOT_ACCEPTABLE) {
        navigate(ROUTES.DASH_BOARD);

        return;
      }

      if (error.statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
        navigate(ROUTES.RELOAD);
      } else {
        navigate(ROUTES.ROOT);
      }
    },
    [navigate],
  );

  return { handleErrorReset };
};
