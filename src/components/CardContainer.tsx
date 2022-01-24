import { getByCountryType } from '../utils/types';
import NumCard from './NumCard';

interface Props {
  data: getByCountryType | undefined;
}

const CardContainer: React.FC<Props> = ({ data }) => {
  const cardArr = [
    { title: '확진자', today: data ? data.todayCases : 0, total: data ? data.cases : 0 },
    { title: '사망', today: data ? data.todayDeaths : 0, total: data ? data.deaths : 0 },
    { title: '완치', today: data ? data.todayRecovered : 0, total: data ? data.recovered : 0 },
  ];
  return (
    <>
      <div className="container">
        {data ? (
          cardArr.map((val, idx) => (
            <NumCard key={idx} title={val.title} today={val.today} total={val.total} />
          ))
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .loading {
          margin: auto;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default CardContainer;
