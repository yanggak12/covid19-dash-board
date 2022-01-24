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
  const labels = chartData && Object.keys(chartData);
  const caseArr = chartData && Object.values(chartData);

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: caseArr,
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
