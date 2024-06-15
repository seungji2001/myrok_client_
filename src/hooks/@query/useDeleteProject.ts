import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProject } from '~/apis/project';
import { useProject } from '~/hooks/useProject';

export const useDeleteProject = () => {
  const { projectId } = useProject();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => deleteProject(projectId),
    onSuccess: () => {
      queryClient.clear();
    },
  });

  return { mutateDeleteProject: mutate };
};
