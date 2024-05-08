import TextEditor from '~/components/common/TextEditor/TextEditor';
import RecordWriteInfoBox from '~/components/meeting_minutes/RecordWriteInfoBox/RecordWriteInfoBox';
import ParticipantInfoBox from '~/components/meeting_minutes/ParticipantInfoBox/ParticipantInfoBox';
import Button from '~/components/common/Button/Button';
import * as S from '~/pages/MeetingMinutesWritePage/MeetingMinutesWritePage.styles';
import { useMeetingMinutesWritePage } from '~/pages/MeetingMinutesWritePage/useMeetingMinutesWritePage';

const MeetingMinutesWritePage = () => {
  const {
    handlers: {
      setRecordData,
      setTagList,
      setRecordName,
      setMemberList,
      handleRecordWriteSubmit,
    },
  } = useMeetingMinutesWritePage();

  return (
    <div css={S.meetingMinutesWritePageContainer}>
      <div css={S.textEditorWrapper}>
        <TextEditor handleTextDataChange={setRecordData} />
      </div>
      <div css={S.infoContainer}>
        <RecordWriteInfoBox
          handleTagListChange={setTagList}
          handleRecordNameChange={setRecordName}
        />
        <ParticipantInfoBox handleMemberListChange={setMemberList} />
        <Button
          css={S.writeButton}
          variant="primary"
          size="lg"
          onClick={handleRecordWriteSubmit}
        >
          작성완료
        </Button>
      </div>
    </div>
  );
};

export default MeetingMinutesWritePage;
