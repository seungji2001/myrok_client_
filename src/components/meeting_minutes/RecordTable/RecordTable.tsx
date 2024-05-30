import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '~/components/common/Pagination/Pagination';
import Text from '~/components/common/Text/Text';
import EmptyRecordPlaceholder from '~/components/meeting_minutes/EmptyRecordPlaceholder/EmptyRecordPlaceholder';
import * as S from '~/components/meeting_minutes/RecordTable/RecordTable.styles';
import RecordTableHeader from '~/components/meeting_minutes/RecordTableHeader/RecordTableHeader';
import { TABLE_HEADER_VALUES } from '~/constants/project';
import { useGetRecordList } from '~/hooks/@query/useGetRecordList';
import type { RecordInfo } from '~/types/record';
import { generateDateToStringFormat } from '~/utils/generateDateToStringFormat';

const RecordTable = () => {
  const [recordList, setRecordList] = useState<RecordInfo[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<'new' | 'old'>('new');
  const navigate = useNavigate();
  const { recordInfoList, isFetched } = useGetRecordList();

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

  return (
    <>
      <div css={S.container}>
        <RecordTableHeader
          sortMethod={sortMethod}
          handleListNewSort={handleListNewSort}
          handleListOldSort={handleListOldSort}
        />
        <div css={S.tableContainer}>
          {recordList.length > 0 ? (
            <div css={S.tableBody}>
              <table css={[S.table, S.tableProperties]}>
                <thead css={S.tableHeader}>
                  <tr>
                    {TABLE_HEADER_VALUES.map((value) => (
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
