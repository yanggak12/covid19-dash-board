import { getByCountryType } from '../utils/types';
import NumCard from './NumCard';

interface Props {
  data: getByCountryType | undefined;
}

const CardContainer: React.FC<Props> = ({ data }) => {
  const cardArr = [
    { title: 'CASES', today: data?.todayCases, total: data?.cases },
    { title: 'DEATHS', today: data?.todayDeaths, total: data?.deaths },
    { title: 'RECOVERED', today: data?.todayRecovered, total: data?.recovered },
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
