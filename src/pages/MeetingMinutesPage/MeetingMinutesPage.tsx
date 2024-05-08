import RecordTable from '~/components/meeting_minutes/RecordTable/RecordTable';
import { css } from '@emotion/react';

const meetingMinutesPageContainer = css`
  padding: 30px;
`;

const MeetingMinutesPage = () => {
  return (
    <div css={meetingMinutesPageContainer}>
      <RecordTable />
    </div>
  );
};

export default MeetingMinutesPage;
