import RecordTable from '~/components/meeting_minutes/RecordTable/RecordTable';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import type { RecordInfo } from '~/types/record';
import { useGetRecordList } from '~/hooks/@query/useGetRecordList';
import RecordTableHeader from '~/components/meeting_minutes/RecordTableHeader/RecordTableHeader';
import TagListMenu from '~/components/meeting_minutes/TagListMenu/TagListMenu';
import { useGetRecordTagList } from '~/hooks/@query/useGetRecordTagList';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';

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
  const [recordList, setRecordList] = useState<RecordInfo[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<'new' | 'old'>('new');
  const [clickedTag, setClickedTag] = useState(
    tagParam === null ? '전체보기' : tagParam,
  );
  const { recordInfoList, isFetched } = useGetRecordList();
  const { tagList, totalCount } = useGetRecordTagList();
  const navigate = useNavigate();

  useEffect(() => {
    if (isFetched) {
      setRecordList(recordInfoList);
      setTotalPage(Math.ceil(recordInfoList.length / 8));
      setCurrentPage(1);
    }
  }, [recordInfoList, isFetched]);

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const handleListNewSort = () => {
    setSortMethod('new');
    setRecordList(recordInfoList);
  };
  const handleListOldSort = () => {
    setSortMethod('old');
    setRecordList([...recordInfoList].reverse());
  };

  const handleTagClick = (tag: string) => {
    setClickedTag(tag);
    const url =
      tag === '전체보기'
        ? ROUTES.MEETING_MINUTES
        : `${ROUTES.MEETING_MINUTES}?tagName=${tag}`;

    navigate(url);
  };

  return (
    <div css={meetingMinutesPageContainer}>
      <RecordTableHeader
        sortMethod={sortMethod}
        handleListNewSort={handleListNewSort}
        handleListOldSort={handleListOldSort}
      />
      <div css={meetingMinutesMainContainer}>
        {totalCount !== 0 && (
          <TagListMenu
            totalCount={totalCount}
            tagList={tagList}
            clickedTag={clickedTag}
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
