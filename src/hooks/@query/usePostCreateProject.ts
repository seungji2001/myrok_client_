import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ErrorResponseData } from '~/apis/interceptors';
import { postCreateProject } from '~/apis/project';
import { useToast } from '~/components/common/Toast/useToast';
import { ERROR_CODE } from '~/constants/api';

export const usePostCreateProject = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postCreateProject,
    onSuccess: () => {
      queryClient.clear();
    },
    onError: (error: ErrorResponseData) => {
      if (error.code && error.code === ERROR_CODE.DUPLICATE_PROJECT)
        showToast('error', error.message ?? '잘못된 요청입니다.');
    },
  });

  return { mutatePostCreateProject: mutate };
};
