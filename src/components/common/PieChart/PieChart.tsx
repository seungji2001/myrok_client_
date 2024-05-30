/** @jsxImportSource @emotion/react */

import { Theme } from '~/styles/Theme';

interface PieChartProps {
  radius: number;
  data: { label: string; percentage: number }[];
}

const PieChart = (props: PieChartProps) => {
  const { radius, data } = props;
  let acc = 100;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      transform="scale(-1, 1)"
    >
      <g
        fill="transparent"
        strokeWidth={radius}
        transform={`rotate(-90) translate(-${radius * 2})`}
      >
        {data.reverse().map((item, index) => {
          acc -= item.percentage;
          return (
            <circle
              key={index}
              r={radius / 2}
              cx={radius}
              cy={radius}
              stroke={Theme.piePreset[index]}
              strokeDasharray={`calc((${acc + item.percentage}) * calc(${Math.PI * radius}) / 100) calc(${Math.PI * radius})`}
            />
          );
        })}
        {data.length === 0 && (
          <circle
            r={radius / 2}
            cx={radius}
            cy={radius}
            stroke={Theme.piePreset[Theme.piePreset.length - 1]}
            strokeDasharray={`calc((100) * calc(${Math.PI * radius}) / 100) calc(${Math.PI * radius})`}
          />
        )}
      </g>
    </svg>
  );
};

export default PieChart;
