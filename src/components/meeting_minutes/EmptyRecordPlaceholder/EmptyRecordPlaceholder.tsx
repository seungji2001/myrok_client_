import * as S from '~/components/meeting_minutes/EmptyRecordPlaceholder/EmptyRecordPlaceholder.styles';
const EmptyRecordPlaceholder = () => {
  return (
    <div css={S.container}>
      <div css={S.placeholderContainer}>
        <p css={S.titleText}>등록된 회의록이 없어요</p>
        <p css={S.clickToAddText}>회의 진행 후 회의록을 작성해보세요</p>
      </div>
    </div>
  );
};

export default EmptyRecordPlaceholder;
