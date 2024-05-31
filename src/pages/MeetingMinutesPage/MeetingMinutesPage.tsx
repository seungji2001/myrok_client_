import RecordTable from '~/components/meeting_minutes/RecordTable/RecordTable';
import { css } from '@emotion/react';
import RecordTableHeader from '~/components/meeting_minutes/RecordTableHeader/RecordTableHeader';
import TagListMenu from '~/components/meeting_minutes/TagListMenu/TagListMenu';
import { useSearchParams } from 'react-router-dom';
import { useMeetingMinutesPage } from '~/pages/MeetingMinutesPage/useMeetingMinutesPage';

const meetingMinutesPageContainer = css`
  padding: 30px;
`;

const meetingMinutesMainContainer = css`
  display: flex;
  gap: 30px;
`;

const MeetingMinutesPage = () => {
  const [params] = useSearchParams();
  const tagParam = params.get('tagName');
  const recordParam = params.get('recordName');
  const {
    totalCount,
    totalPage,
    currentPage,
    sortMethod,
    searchRecord,
    searchTag,
    tagList,
    recordList,

    handler: {
      handlePageChange,
      handleListNewSort,
      handleListOldSort,
      handleRecordSearchChange,
      handleRecordSearchClick,
      handleTagClick,
    },
  } = useMeetingMinutesPage(tagParam, recordParam);

  return (
    <div css={meetingMinutesPageContainer}>
      <RecordTableHeader
        sortMethod={sortMethod}
        searchRecord={searchRecord}
        handleRecordSearch={handleRecordSearchChange}
        handleListNewSort={handleListNewSort}
        handleListOldSort={handleListOldSort}
        handleRecordSearchClick={handleRecordSearchClick}
      />
      <div css={meetingMinutesMainContainer}>
        {totalCount !== 0 && (
          <TagListMenu
            totalCount={totalCount}
            tagList={tagList}
            searchTag={searchTag}
            handleTagClick={handleTagClick}
          />
        )}
        <RecordTable
          recordList={recordList}
          currentPage={currentPage}
          totalPage={totalPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MeetingMinutesPage;
