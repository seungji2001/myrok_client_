import { type ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import { useGetRecordList } from '~/hooks/@query/useGetRecordList';
import { useGetRecordTagList } from '~/hooks/@query/useGetRecordTagList';
import type { RecordInfo } from '~/types/record';

export const useMeetingMinutesPage = (
  tagParam: string | null,
  recordParam: string | null,
) => {
  const [recordList, setRecordList] = useState<RecordInfo[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<'new' | 'old'>('new');
  const [searchTag, setSearchTag] = useState(
    tagParam === null ? '전체보기' : tagParam,
  );
  const [searchRecord, setSearchRecord] = useState(
    recordParam === null ? '' : recordParam,
  );
  const { recordInfoList, isFetched } = useGetRecordList(
    tagParam === null ? '' : tagParam,
    recordParam === null ? '' : recordParam,
  );
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
    if (tag === '전체보기') setSearchRecord('');

    setSearchTag(tag);

    const url = handleSearchUrlNavigate(
      tag,
      tag === '전체보기' ? '' : searchRecord,
    );

    navigate(ROUTES.MEETING_MINUTES + url);
  };

  const handleRecordSearchClick = () => {
    const url = handleSearchUrlNavigate(searchTag, searchRecord);

    navigate(ROUTES.MEETING_MINUTES + url);
  };

  const handleRecordSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const recordName = e.target.value;
    setSearchRecord(() => recordName);
  };

  const handleSearchUrlNavigate = (tagName: string, recordName: string) => {
    if (
      tagName !== '전체보기' &&
      tagName.length !== 0 &&
      recordName.length !== 0
    )
      return `?tagName=${tagName}&recordName=${recordName}`;

    if (tagName !== '전체보기') return `?tagName=${tagName}`;
    if (recordName.length !== 0) return `?recordName=${recordName}`;

    return '';
  };
  return {
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
  };
};
