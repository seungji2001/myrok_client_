import { useNavigate } from 'react-router-dom';
import Text from '~/components/common/Text/Text';
import EmptyRecordPlaceholder from '~/components/meeting_minutes/EmptyRecordPlaceholder/EmptyRecordPlaceholder';
import { TABLE_HEADER_VALUES } from '~/constants/project';
import { useGetRecordList } from '~/hooks/@query/useGetRecordList';
import { generateDateToStringFormat } from '~/utils/generateDateToStringFormat';
import * as S from '~/components/dash_board/DashBoardTable.styles';
import Button from '~/components/common/Button/Button';
import { ROUTES } from '~/constants/routes';

const DashBoardTable = () => {
  const { recordInfoList } = useGetRecordList('', '');
  const navigate = useNavigate();

  return (
    <div css={S.tableContainer}>
      {recordInfoList.length > 0 ? (
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
              {recordInfoList
                .slice(0, 8)
                .map(
                  ({ recordId, recordName, recordDate, recordWriterName }) => (
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
                          <Text>{generateDateToStringFormat(recordDate)}</Text>
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
        </div>
      ) : (
        <EmptyRecordPlaceholder />
      )}
      <Button
        css={S.recordListButton}
        aria-label="회의록 목록으로 이동"
        variant="primary"
        size="lg"
        onClick={() => navigate(ROUTES.MEETING_MINUTES)}
      >
        회의록 목록 전체보기
      </Button>
    </div>
  );
};

export default DashBoardTable;
