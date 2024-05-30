import { useNavigate } from 'react-router-dom';
import Pagination from '~/components/common/Pagination/Pagination';
import Text from '~/components/common/Text/Text';
import EmptyRecordPlaceholder from '~/components/meeting_minutes/EmptyRecordPlaceholder/EmptyRecordPlaceholder';
import * as S from '~/components/meeting_minutes/RecordTable/RecordTable.styles';
import { TABLE_HEADER_VALUES } from '~/constants/project';
import type { RecordInfo } from '~/types/record';
import { generateDateToStringFormat } from '~/utils/generateDateToStringFormat';

interface RecordTableProps {
  recordList: RecordInfo[];
  currentPage: number;
  totalPage: number;
  handlePageChange: (pageNum: number) => void;
}
const RecordTable = (props: RecordTableProps) => {
  const { recordList, currentPage, totalPage, handlePageChange } = props;
  const navigate = useNavigate();

  return (
    <div css={S.container}>
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
                        onClick={() => navigate(`/meeting-minutes/${recordId}`)}
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
  );
};

export default RecordTable;
