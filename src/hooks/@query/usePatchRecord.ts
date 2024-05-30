import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { patchRecord } from '~/apis/record';
import { ROUTES } from '~/constants/routes';
import type { Record } from '~/types/record';

export const usePatchRecord = (recordId: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (
      data: Pick<Record, 'recordWriterId' | 'recordName' | 'tagList'>,
    ) => patchRecord(recordId, data),
    onSuccess: (response) => {
      const { recordId } = response.data;

      queryClient.invalidateQueries({
        queryKey: [recordId, 'record', 'dashBoardTags'],
      });

      navigate(`${ROUTES.MEETING_MINUTES}/${recordId}`);
    },
  });

  return { mutatePatchRecord: mutate };
};
