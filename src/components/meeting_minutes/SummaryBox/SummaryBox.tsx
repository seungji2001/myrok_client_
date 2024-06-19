import { RobotIcon } from '~/assets/svg';
import Text from '~/components/common/Text/Text';
import { useGetSummary } from '~/hooks/@query/useGetSummary';
import * as S from '~/components/meeting_minutes/SummaryBox/SummaryBox.styles';

interface SummaryBoxProps {
  recordId: number;
}

const SummaryBox = (props: SummaryBoxProps) => {
  const { recordId } = props;

  const { summary } = useGetSummary(recordId);

  return (
    <div css={S.summaryBoxContainer}>
      <RobotIcon />
      <div css={S.summaryContainer}>
        {summary === null ? (
          <Text weight="bold">
            열심히 회의록을 요약하고 있어요! 잠시만 기다려주세요..
          </Text>
        ) : (
          <div>
            <Text css={{ marginBottom: '6px' }} weight="bold" size="lg">
              회의록 요약
            </Text>
            <Text css={{ whiteSpace: 'pre-wrap' }} size="lg">
              {summary}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryBox;
