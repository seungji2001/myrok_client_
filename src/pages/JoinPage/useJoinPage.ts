import {
  type ChangeEventHandler,
  type FormEventHandler,
  type RefObject,
  type MouseEventHandler,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '~/components/common/Toast/useToast';
import { ROUTES } from '~/constants/routes';
import { usePostJoinProject } from '~/hooks/@query/usePostJoinProject';

const INVITE_CODE_LENGTH = 8 as const;

export const useJoinPage = (inputRef: RefObject<HTMLInputElement>) => {
  const [inviteCode, setInviteCode] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isRequired, setIsRequired] = useState(true);
  const [warningText, setWarningText] = useState('');
  const { showToast } = useToast();
  const { mutatePostJoinProject } = usePostJoinProject();
  const navigate = useNavigate();

  const handleInviteCodeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: rawCode } = e.target;
    const code = rawCode.replace(/[^A-z0-9]/g, '');

    if (rawCode.length !== code.length) {
      setWarningText(() => '영어 대,소문자와 숫자만 입력 가능합니다.');
    }

    if (rawCode.length === code.length) {
      setWarningText(() => '');
    }

    if (code.length > INVITE_CODE_LENGTH) {
      setWarningText(() => '초대코드는 8자리입니다.');
    }

    setInviteCode(() => code.slice(0, INVITE_CODE_LENGTH));
  };

  const handleProjectInviteCodeSubmit: FormEventHandler<HTMLFormElement> = (
    e,
  ) => {
    e.preventDefault();

    if (inviteCode.length !== INVITE_CODE_LENGTH) {
      showToast('error', '8자리 초대코드를 입력해주세요.');
      inputRef.current?.focus();
      return;
    }

    mutatePostJoinProject(
      {
        inviteCode: inviteCode,
      },
      {
        onSuccess: () => {
          showToast('success', '프로젝트에 참여했어요!');
          navigate(ROUTES.DASH_BOARD);
        },
        onError: () => {
          inputRef.current?.focus();

          setIsRequired(() => true);
          setIsClicked(() => false);
          setWarningText(() => '');
          setInviteCode(() => '');
        },
      },
    );
  };

  const handleCreatePageClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    setIsRequired(() => false);
    setIsClicked(() => true);
    setWarningText(() => '');
    setInviteCode(() => '');
  };

  return {
    inviteCode,
    isClicked,
    isRequired,
    warningText,

    handlers: {
      handleInviteCodeChange,
      handleProjectInviteCodeSubmit,
      handleCreatePageClicked,
    },
  };
};
