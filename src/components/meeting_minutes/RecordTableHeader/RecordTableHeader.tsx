import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button/Button';
import { ROUTES } from '~/constants/routes';
import * as S from '~/components/meeting_minutes/RecordTableHeader/RecordTableHeader.styles';
import Input from '~/components/common/Input/Input';
import { ChangeEvent, useRef } from 'react';

interface RecordTableHeaderProps {
  sortMethod: 'new' | 'old';
  searchRecord: string;
  handleRecordSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleListNewSort: () => void;
  handleListOldSort: () => void;
  handleRecordSearchClick: () => void;
}
const RecordTableHeader = (props: RecordTableHeaderProps) => {
  const {
    sortMethod,
    searchRecord,
    handleRecordSearch,
    handleListNewSort,
    handleListOldSort,
    handleRecordSearchClick,
  } = props;
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div css={S.recordTableHeaderContainer}>
      <div css={S.menuHeader}>
        <div>
          <Input
            width="300px"
            height="30px"
            placeholder="검색어를 입력해주세요."
            value={searchRecord}
            onChange={handleRecordSearch}
            css={S.recordSearchInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') buttonRef.current?.click();
            }}
          />
          <Button
            css={S.recordSearchButton}
            aria-label="회의록 검색"
            variant="primary"
            onClick={handleRecordSearchClick}
            ref={buttonRef}
          >
            검색
          </Button>
        </div>
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
