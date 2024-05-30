/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import PieChart from '~/components/common/PieChart/PieChart';
import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';
import DashBoardTable from '~/components/dash_board/DashBoardTable';
import { ROUTES } from '~/constants/routes';
import { useGetDashBoardTags } from '~/hooks/@query/useGetDashBoardTags';
import { Theme } from '~/styles/Theme';
import { arrayOf } from '~/utils/arrayOf';
import { generateDarkenHex } from '~/utils/generateDarkenHex';
import * as S from '~/pages/DashBoardPage/DashBoardPage.styles';

const DashBoardPage = () => {
  const { tags, etcPercentage } = useGetDashBoardTags();
  const navigate = useNavigate();

  const chartData = arrayOf(
    etcPercentage === 0 ? tags.length : tags.length + 1,
  ).map((index) => {
    if (index < tags.length) {
      return {
        label: tags[index].tagName,
        percentage: tags[index].percentage,
      };
    }
    return {
      label: '기타',
      percentage: etcPercentage,
    };
  });

  return (
    <div css={S.dashBoardPageContainer}>
      <div css={S.pieChartContainer}>
        <PieChart radius={240} data={chartData} />
        <div css={S.tagsGrid}>
          {chartData.map((data, i) => {
            const color = generateDarkenHex(Theme.piePreset[i], 30);

            if (i === 4)
              return (
                <Tag
                  key={i}
                  color={color}
                  content={`${data.label} (${data.percentage}%)`}
                />
              );

            return (
              <Tag.Check
                key={i}
                act="check"
                color={color}
                outLine={true}
                content={`${data.label} (${data.percentage}%)`}
                handleTagCheck={() => {
                  const isMoving = confirm(
                    `"${data.label}" 태그가 입력된 회의록을 보시겠습니까?`,
                  );

                  if (isMoving)
                    navigate(`${ROUTES.MEETING_MINUTES}?tagName=${data.label}`);
                }}
              />
            );
          })}
          {etcPercentage === 100 && (
            <Text weight="semiBold" size="lg">
              회의록 작성시 태그를 입력해보세요!
            </Text>
          )}
        </div>
      </div>
      <DashBoardTable />
    </div>
  );
};

export default DashBoardPage;
