import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postRecordDelete } from '~/apis/record';
import { ROUTES } from '~/constants/routes';

export const usePostRecordDelete = (recordId: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (data: { recordWriterId: number }) =>
      postRecordDelete(recordId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['recordList', 'dashBoardTags', 'recordTagList'],
      });

      navigate(`${ROUTES.MEETING_MINUTES}`);
    },
  });

  return { mutatePostRecordDelete: mutate };
};
