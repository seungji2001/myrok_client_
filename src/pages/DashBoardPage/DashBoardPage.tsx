/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PieChart from '~/components/common/PieChart/PieChart';
import Tag from '~/components/common/Tag/Tag';
import Text from '~/components/common/Text/Text';
import DashBoardTable from '~/components/dash_board/DashBoardTable';
import { useGetDashBoardTags } from '~/hooks/@query/useGetDashBoardTags';
import { Theme } from '~/styles/Theme';
import { arrayOf } from '~/utils/arrayOf';
import { generateDarkenHex } from '~/utils/generateDarkenHex';

const dashBoardPageContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: calc(100% - 160px);
  gap: 100px;
`;

const pieChartContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const tagsGrid = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;

  max-width: 400px;
  max-height: 84px;
  overflow-y: auto;
`;

const DashBoardPage = () => {
  const { tags, etcPercentage } = useGetDashBoardTags();

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
    <div css={dashBoardPageContainer}>
      <div css={pieChartContainer}>
        <PieChart radius={240} data={chartData} />
        <div css={tagsGrid}>
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
                  alert('click!');
                }}
              />
            );
          })}
          {chartData.length === 0 && (
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
