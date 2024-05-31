import * as S from '~/components/meeting_minutes/EmptyRecordPlaceholder/EmptyRecordPlaceholder.styles';
const EmptyRecordPlaceholder = () => {
  return (
    <div css={S.container}>
      <div css={S.placeholderContainer}>
        <p css={S.titleText}>회의록이 없어요🥺</p>
      </div>
    </div>
  );
};

export default EmptyRecordPlaceholder;
