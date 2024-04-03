import {
  type ChangeEventHandler,
  type FormEventHandler,
  type RefObject,
  type FocusEventHandler,
  useState,
} from 'react';
import { useToast } from '~/components/common/Toast/useToast';
import type { Period } from '~/types/project';
import { isYYYYMMDD } from '~/types/typeGuard';
import { generateYYYYMMDD } from '~/utils/generateYYYYMMDD';

export const useCreatePage = (inputRef: RefObject<HTMLInputElement>) => {
  const [projectName, setProjectName] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [period, setPeriod] = useState<Period>();
  const { showToast } = useToast();

  const handleProjectNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setProjectName(() => e.target.value);
  };

  const handleProjectCreateSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (period !== undefined) {
      if (period.startDate > period.endDate) {
        showToast(
          'error',
          '프로젝트 마감날짜는 시작날짜보다 나중이어야 합니다.',
        );
        return;
      }
    }

    const isRightName = confirm(
      `프로젝트 이름: ${projectName}\n${period !== undefined ? `프로젝트 기간: ${period.startDate} ~ ${period.endDate}\n` : ''}프로젝트를 생성하시겠습니까?`,
    );

    if (!isRightName) {
      inputRef.current?.focus();
      return;
    }
  };

  const handlePeriodShowClicked = () => {
    if (!isClicked) {
      const today = new Date();

      setPeriod({
        startDate: generateYYYYMMDD(today),
        endDate: generateYYYYMMDD(
          new Date(today.setMonth(today.getMonth() + 6)),
        ),
      });
    } else if (isClicked) {
      setPeriod(undefined);
    }

    setIsClicked((prev) => !prev);
  };

  const handleScheduleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    if (!['startDate', 'endDate'].includes(name)) {
      return;
    }

    setPeriod((prev) => {
      if (prev !== undefined) {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  const handleScheduleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;

    if (period === undefined) return;

    if (
      !['startDate', 'endDate'].includes(name) ||
      !isYYYYMMDD(period.startDate) ||
      !isYYYYMMDD(period.endDate)
    ) {
      return;
    }
  };

  return {
    projectName,
    isClicked,
    period,

    handlers: {
      handleProjectNameChange,
      handleProjectCreateSubmit,
      handlePeriodShowClicked,
      handleScheduleChange,
      handleScheduleBlur,
    },
  };
};
