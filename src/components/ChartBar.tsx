import { Bar, Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

interface Props {
  title: string;
  chartData: object | undefined;
  color: string;
}

const ChartBar: React.FC<Props> = ({ title, chartData, color }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  const labels = chartData && Object.keys(chartData).slice(1);
  const caseArr = chartData && Object.values(chartData).slice(1);
  let casesNum = chartData ? (Object.values(chartData)[0] as number) : 0;
  const data = {
    labels: labels?.map((v, idx) => {
      if (idx === labels.length - 1) return '어제';
      return v.replace('/', '월 ').split('/')[0] + '일';
    }),
    datasets: [
      {
        label: title,
        data: caseArr?.map((v: number) => {
          const value = v - casesNum;
          casesNum += value;
          return value;
        }),
        backgroundColor: color,
      },
    ],
  };
  return (
    <div className="container">
      <Bar options={options} data={data} />
      <style jsx>{`
        .container {
          width: 80%;
        }
      `}</style>
    </div>
  );
};

export default ChartBar;
