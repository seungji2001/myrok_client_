import { useNavigate, useParams } from 'react-router-dom';
import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';
import { useGetRecord } from '~/hooks/@query/useGetRecord';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import { Theme } from '~/styles/Theme';
import { generateDateToStringFormat } from '~/utils/generateDateToStringFormat';
import * as S from '~/pages/MeetingMinutesRecordPage/MeetingMinutesRecordPage.styles';
import SummaryBox from '~/components/meeting_minutes/SummaryBox/SummaryBox';
import Button from '~/components/common/Button/Button';
import { useGetUserInfo } from '~/hooks/@query/useGetUserInfo';
import { usePostRecordDelete } from '~/hooks/@query/usePostRecordDelete';
import { useToast } from '~/components/common/Toast/useToast';
import { HTTPError } from '~/apis/HTTPError';
import { ROUTES } from '~/constants/routes';

const MeetingMinutesRecordPage = () => {
  const recordId = useParams().recordId;
  if (recordId === undefined || isNaN(Number(recordId))) {
    return <NotFoundPage />;
  }
  const navigate = useNavigate();

  const {
    recordContent,
    recordName,
    tagList,
    recordWriterId,
    memberList,
    recordDate,
  } = useGetRecord(Number(recordId));
  const { memberId } = useGetUserInfo();
  const { mutatePostRecordDelete } = usePostRecordDelete(Number(recordId));
  const { showToast } = useToast();

  const recordWriterName = memberList.find(
    (member) => member.memberId === recordWriterId,
  )?.name;

  const handleRecordDelete = () => {
    const isDelete = confirm(
      '정말 회의록을 삭제하시겠습니까?\n삭제된 회의록은 복구할 수 없습니다.',
    );

    if (!isDelete) return;

    mutatePostRecordDelete(
      {
        recordWriterId: recordWriterId,
      },
      {
        onSuccess: () => showToast('success', '회의록이 삭제되었습니다.'),
        onError: (error: Error) => {
          if (error instanceof HTTPError) {
            if (error.code === 'R001' || error.code === 'R004') {
              showToast('error', error.message);

              navigate(ROUTES.MEETING_MINUTES);
              return;
            }
          }

          showToast(
            'error',
            error.message === '' ? '잠시 후 다시 시도해주세요' : error.message,
          );
        },
      },
    );
  };
  return (
    <div css={S.meetingMinutesRecordPageContainer}>
      <div css={S.recordDetailContainer}>
        <SummaryBox recordId={Number(recordId)} />
        <div dangerouslySetInnerHTML={{ __html: recordContent }}></div>
      </div>
      <div css={S.infoContainer}>
        <div css={S.recordWriteInfoBoxContainer}>
          <div css={S.titleContainer}>
            <Text css={{ width: '70px' }} size="xxl" weight="bold">
              회의명
            </Text>
            <Text size="xl" weight="bold">
              {recordName}
            </Text>
          </div>
          <div css={S.titleContainer}>
            <Text css={{ width: '70px' }} size="xxl" weight="bold">
              작성자
            </Text>
            <Text size="xl" weight="bold">
              {recordWriterName === undefined ? '' : recordWriterName}
            </Text>
          </div>
          <div css={S.titleContainer}>
            <Text css={{ width: '70px' }} size="xxl" weight="bold">
              작성일
            </Text>
            <Text weight="bold">{generateDateToStringFormat(recordDate)}</Text>
          </div>
          <div css={S.tagContainer}>
            <Text css={{ width: '70px' }} size="xxl" weight="bold">
              태그
            </Text>
            <div css={S.tagsGrid}>
              {tagList.map((newTag, i) => {
                const color = Theme.presetColors[i % 10];
                return (
                  <Tag
                    key={newTag}
                    color={color}
                    outLine={true}
                    content={newTag}
                  />
                );
              })}
            </div>
          </div>
        </div>
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
        {recordWriterId === memberId && (
          <div css={S.writerButton}>
            <Button
              css={S.buttonStyling}
              variant="primary"
              onClick={() => navigate(`/meeting-minutes/${recordId}/edit`)}
            >
              수정하기
            </Button>
            <Button css={S.deleteButtonStyling} onClick={handleRecordDelete}>
              삭제하기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingMinutesRecordPage;
