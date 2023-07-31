import { Chart, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

interface AnalyticCardProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      : string[];
      borderColor: string[];
    }[];
  };
  options?: ChartOptions;
  width?: string;
  height?: string;
}

export const AnalyticCard: React.FC<AnalyticCardProps> = ({
  data,
  options = {},
  width = '50%',
  height = '50%',
}) => {
  return (
    <div style={{ width, height }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};
