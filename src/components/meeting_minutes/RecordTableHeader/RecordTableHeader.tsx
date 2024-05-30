import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button/Button';
import Text from '~/components/common/Text/Text';
import { ROUTES } from '~/constants/routes';
import * as S from '~/components/meeting_minutes/RecordTableHeader/RecordTableHeader.styles';

interface RecordTableHeaderProps {
  sortMethod: 'new' | 'old';
  handleListNewSort: () => void;
  handleListOldSort: () => void;
}
const RecordTableHeader = (props: RecordTableHeaderProps) => {
  const { sortMethod, handleListNewSort, handleListOldSort } = props;
  const navigate = useNavigate();

  return (
    <div css={S.recordTableHeaderContainer}>
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
          onClick={handleListNewSort}
        >
          최신 순
        </Button>
        <div css={S.divider} />
        <Button
          css={{ fontWeight: sortMethod === 'old' ? 900 : 400 }}
          variant="plain"
          value="old"
          onClick={handleListOldSort}
        >
          오래된 순
        </Button>
      </div>
    </div>
  );
};

export default RecordTableHeader;
