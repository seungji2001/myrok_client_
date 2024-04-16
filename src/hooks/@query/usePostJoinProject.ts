import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ErrorResponseData } from '~/apis/interceptors';
import { postJoinProject } from '~/apis/project';
import { useToast } from '~/components/common/Toast/useToast';
import { ERROR_CODE } from '~/constants/api';

export const usePostJoinProject = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: postJoinProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProjectInfo'] });
    },
    onError: (error: ErrorResponseData) => {
      if (error.code && error.code === ERROR_CODE.INVALID_INVITE_CODE)
        showToast('error', error.message ?? '잘못된 참여코드 입니다.');
    },
  });

  return { mutatePostJoinProject: mutate };
};
