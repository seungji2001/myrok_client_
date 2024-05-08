import { useState } from 'react';
import { useToast } from '~/components/common/Toast/useToast';
import { useGetUserInfo } from '~/hooks/@query/useGetUserInfo';
import { usePostRecord } from '~/hooks/@query/usePostRecord';
import { useProject } from '~/hooks/useProject';
import { generateYYYYMMDD } from '~/utils/generateYYYYMMDD';

export const useMeetingMinutesWritePage = () => {
  const [recordData, setRecordData] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [memberList, setMemberList] = useState<number[]>([]);
  const [recordName, setRecordName] = useState('');
  const recordDate = generateYYYYMMDD(new Date());
  const { mutatePostRecord } = usePostRecord();
  const { showToast } = useToast();
  const { projectId } = useProject();
  const { memberId } = useGetUserInfo();

  const handleRecordWriteSubmit = () => {
    if (recordName.length === 0) {
      showToast('error', '회의명을 작성해주세요');
      return;
    }

    if (recordData.length === 0) {
      showToast('error', '회의록이 작성되지 않았습니다.');
      return;
    }

    if (memberList.length === 0) {
      showToast('error', '회의 참여자를 선택해주세요');
      return;
    }

    if (tagList.length === 0) {
      const isOK = confirm('작성된 태그가 없습니다. 괜찮으신가요?');
      if (!isOK) {
        return;
      }
    }

    const isWriteFinish = confirm('회의록 작성을 완료하시겠습니까?');
    if (!isWriteFinish) {
      return;
    }

    mutatePostRecord(
      {
        projectId: projectId,
        recordName: recordName,
        recordContent: recordData,
        recordWriterId: memberId,
        tagList: tagList,
        recordDate: recordDate,
        memberList: memberList,
      },
      {
        onSuccess: () => {
          showToast('success', '회의록이 작성되었습니다.');
        },
        onError: (error: Error) => {
          showToast(
            'error',
            error.message === '' ? '잠시 후 다시 시도해주세요' : error.message,
          );
        },
      },
    );
  };

  return {
    handlers: {
      setRecordData,
      setTagList,
      setRecordName,
      setMemberList,
      handleRecordWriteSubmit,
    },
  };
};
