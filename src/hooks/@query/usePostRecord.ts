import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postRecord } from '~/apis/record';
import { ROUTES } from '~/constants/routes';

export const usePostRecord = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: postRecord,
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ['recordList', 'dashBoardTags'],
      });
      const { recordId } = response.data;

      navigate(`${ROUTES.MEETING_MINUTES}/${recordId}`);
    },
  });

  return { mutatePostRecord: mutate };
};
