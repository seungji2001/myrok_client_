import {
  type ChangeEventHandler,
  type FormEventHandler,
  type RefObject,
  useState,
} from 'react';

export const useCreatePage = (inputRef: RefObject<HTMLInputElement>) => {
  const [projectName, setProjectName] = useState('');

  const handleProjectNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setProjectName(() => e.target.value);
  };

  const handleProjectCreateSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isRightName = confirm(`"${projectName}"으로 팀을 개설하시겠습니까?`);

    if (!isRightName) {
      inputRef.current?.focus();
      return;
    }
  };

  return {
    projectName,

    handlers: { handleProjectNameChange, handleProjectCreateSubmit },
  };
};
