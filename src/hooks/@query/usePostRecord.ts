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
        queryKey: ['recordList'],
      });
      const { recordId } = response.data;

      alert(`${recordId}로 생성 완료임~`);
      navigate(ROUTES.MEETING_MINUTES);
    },
  });

  return { mutatePostRecord: mutate };
};
