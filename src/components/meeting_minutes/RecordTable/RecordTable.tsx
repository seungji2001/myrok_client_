import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button/Button';
import Pagination from '~/components/common/Pagination/Pagination';
import Text from '~/components/common/Text/Text';
import EmptyRecordPlaceholder from '~/components/meeting_minutes/EmptyRecordPlaceholder/EmptyRecordPlaceholder';
import * as S from '~/components/meeting_minutes/RecordTable/RecordTable.styles';
import { ROUTES } from '~/constants/routes';
import { useGetRecordList } from '~/hooks/@query/useGetRecordList';
import type { RecordInfo } from '~/types/record';
import { generateDateToStringFormat } from '~/utils/generateDateToStringFormat';

const tableHeaderValues = ['회의록', '작성일', '작성자'] as const;

const RecordTable = () => {
  const [recordList, setRecordList] = useState<RecordInfo[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<'new' | 'old'>('new');
  const navigate = useNavigate();
  const { recordInfoList } = useGetRecordList();

  useEffect(() => {
    setTotalPage(Math.ceil(recordList.length / 8));
    setCurrentPage(1);
  }, [recordList]);

  useEffect(() => {
    setRecordList(recordInfoList);
  }, [recordInfoList]);

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      <div css={S.container}>
        <div css={S.menuHeader}>
          <Text css={S.recordTableTitle} weight="bold">
            회의록
          </Text>
          <Button
            css={S.recordAddButton}
            aria-label="새로운 회의록 작성하기"
            variant="primary"
            size="lg"
            onClick={() => navigate(ROUTES.MEETING_MINUTES_WRITE)}
          >
            회의록 작성
          </Button>
        </div>
        <div css={S.sortMenuContainer}>
          <Button
            css={{ fontWeight: sortMethod === 'new' ? 900 : 400 }}
            variant="plain"
            value="new"
            onClick={() => {
              setSortMethod('new');
              setRecordList(recordInfoList);
            }}
          >
            최신 순
          </Button>
          <div css={S.divider} />
          <Button
            css={{ fontWeight: sortMethod === 'old' ? 900 : 400 }}
            variant="plain"
            value="old"
            onClick={() => {
              setSortMethod('old');
              setRecordList([...recordInfoList].reverse());
            }}
          >
            오래된 순
          </Button>
        </div>
        <div css={S.tableContainer}>
          {recordList.length > 0 ? (
            <div css={S.tableBody}>
              <table css={[S.table, S.tableProperties]}>
                <thead css={S.tableHeader}>
                  <tr>
                    {tableHeaderValues.map((value) => (
                      <th key={value}>
                        <Text weight="semiBold" size="xl">
                          {value}
                        </Text>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recordList
                    .slice((currentPage - 1) * 8, currentPage * 8)
                    .map(
                      ({
                        recordId,
                        recordName,
                        recordDate,
                        recordWriterName,
                      }) => (
                        <tr
                          key={recordId}
                          onClick={() =>
                            navigate(`/meeting-minutes/${recordId}`)
                          }
                        >
                          <td>
                            <Text weight="semiBold" size="lg">
                              {recordName}
                            </Text>
                          </td>
                          <td>
                            <time>
                              <Text>
                                {generateDateToStringFormat(recordDate)}
                              </Text>
                            </time>
                          </td>
                          <td title={recordWriterName}>
                            <Text size="lg" weight="semiBold">
                              {recordWriterName}
                            </Text>
                          </td>
                        </tr>
                      ),
                    )}
                </tbody>
              </table>
              <Pagination
                totalPage={totalPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </div>
          ) : (
            <EmptyRecordPlaceholder />
          )}
        </div>
      </div>
    </>
  );
};

export default RecordTable;
