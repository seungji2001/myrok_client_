import { useNavigate, useParams } from 'react-router-dom';
import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';
import { useGetRecord } from '~/hooks/@query/useGetRecord';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import { Theme } from '~/styles/Theme';
import * as S from '~/pages/MeetingMinutesEditPage/MeetingMinutesEditPage.styles';
import Button from '~/components/common/Button/Button';
import { useGetUserInfo } from '~/hooks/@query/useGetUserInfo';
import { useState } from 'react';
import RecordEditInfoBox from '~/components/meeting_minutes/RecordEditInfoBox/RecordEditInfoBox';
import { usePatchRecord } from '~/hooks/@query/usePatchRecord';
import { useToast } from '~/components/common/Toast/useToast';
import { HTTP_STATUS_CODE } from '~/constants/api';
import { HTTPError } from '~/apis/HTTPError';

const MeetingMinutesEditPage = () => {
  const recordId = useParams().recordId;
  if (recordId === undefined || isNaN(Number(recordId))) {
    return <NotFoundPage />;
  }
  const { recordContent, recordName, tagList, recordWriterId, memberList } =
    useGetRecord(Number(recordId));
  const { memberId } = useGetUserInfo();

  if (memberId !== 0 && recordWriterId !== 0 && memberId !== recordWriterId) {
    throw new HTTPError(HTTP_STATUS_CODE.NOT_ACCEPTABLE);
  }
  const [newTagList, setNewTagList] = useState<string[]>([...tagList]);
  const [newRecordName, setNewRecordName] = useState(recordName);
  const { showToast } = useToast();
  const { mutatePatchRecord } = usePatchRecord(Number(recordId));

  const handleRecordEditSubmit = () => {
    if (recordName.length === 0) {
      showToast('error', '회의명을 작성해주세요');
      return;
    }

    if (tagList.length === 0) {
      const isOK = confirm('작성된 태그가 없습니다. 괜찮으신가요?');
      if (!isOK) {
        return;
      }
    }

    const isWriteFinish = confirm('회의록 수정을 완료하시겠습니까?');
    if (!isWriteFinish) {
      return;
    }

    mutatePatchRecord(
      {
        recordName: newRecordName,
        recordWriterId: memberId,
        tagList: newTagList,
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

  return (
    <div css={S.meetingMinutesEditPageContainer}>
      <div css={S.recordDetailContainer}>
        <div dangerouslySetInnerHTML={{ __html: recordContent }}></div>
      </div>
      <div css={S.infoContainer}>
        <RecordEditInfoBox
          recordName={newRecordName}
          tagList={newTagList}
          handleRecordNameChange={setNewRecordName}
          handleTagListChange={setNewTagList}
        />

        <div css={S.participantInfoBoxContainer}>
          <Text size="xxl" weight="bold">
            참가자
          </Text>
          <div css={S.participantContainer}>
            {memberList.map((member) => {
              const { memberId, name } = member;
              return (
                <Tag
                  key={memberId}
                  color={
                    memberId === recordWriterId
                      ? Theme.color.primary500
                      : Theme.color.gray800
                  }
                  css={S.tagStyling}
                  content={name}
                />
              );
            })}
          </div>
        </div>
        <Button
          css={S.writerButton}
          variant="primary"
          onClick={handleRecordEditSubmit}
        >
          수정하기
        </Button>
      </div>
    </div>
  );
};

export default MeetingMinutesEditPage;
