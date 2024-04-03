/** @jsxImportSource @emotion/react */
import * as S from '~/components/common/Title/Title.styles';

const Title = () => {
  return (
    <div css={S.titleContainer}>
      <h1 css={S.explainText}>너와 나의 회의록</h1>
      <h2 css={S.titleText}>마이록</h2>
    </div>
  );
};

export default Title;
