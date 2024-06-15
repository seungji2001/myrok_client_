import { useRef, useState } from 'react';
import type { ChangeEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '~/components/common/Toast/useToast';
import { ROUTES } from '~/constants/routes';
import { useDeleteProject } from '~/hooks/@query/useDeleteProject';
import { useProject } from '~/hooks/useProject';

export const useTeamExitModal = () => {
  const navigate = useNavigate();
  const { projectName, resetProject } = useProject();
  const { showToast } = useToast();
  const { mutateDeleteProject } = useDeleteProject();
  const ref = useRef<HTMLButtonElement>(null);
  const [teamName, setTeamName] = useState('');

  const handleTeamNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { target } = e;

    setTeamName(() => target.value);
  };

  const handleSubmit = () => {
    if (teamName.trim() !== projectName) {
      showToast('error', '탈퇴하려는 팀 이름과 일치하지 않습니다.');
      return;
    }

    const isConfirmed = confirm(
      '정말 팀을 탈퇴하시겠어요? \n 해당 작업은 되돌릴 수 없습니다.',
    );

    if (!isConfirmed) {
      return;
    }

    mutateDeleteProject(undefined, {
      onSuccess: () => {
        resetProject();
        handleResetInput();
        ref.current?.click();
        showToast('success', '팀 탈퇴가 완료되었습니다.');

        navigate(ROUTES.START);
      },
    });
  };

  const handleResetInput = () => {
    setTeamName(() => '');
  };

  return {
    teamName,
    projectName,
    ref,

    handlers: {
      handleTeamNameChange,
      handleSubmit,
      handleResetInput,
    },
  };
};
