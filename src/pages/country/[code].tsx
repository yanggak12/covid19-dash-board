import { useEffect, useState } from 'react';

import CardContainer from '../../components/CardContainer';
import Seo from '../../components/Seo';
import getByCountries from '../../containers/getByCountries';
import { getByCountryType, getHistoricalType, timeLineType } from '../../utils/types';
import getHistorical from '../../containers/getHistorical';
import ChartBar from '../../components/ChartBar';
import { useRouter } from 'next/router';
import ChartRange from '../../components/ChartRange';
import { countryData } from '../../utils/countryInfo';

const DashBoard: React.VFC = () => {
  const router = useRouter();
  const path = router.asPath.split('/')[2] === '[code]' ? 'kr' : router.asPath.split('/')[2];
  const [covidData, setCovidData] = useState<getByCountryType>();
  const [historicCase, setHistoricCase] = useState<{ [date: string]: [number] }>();
  const [historicDeath, setHistoricDeath] = useState<{ [date: string]: [number] }>();
  const [lastDays, setLastDays] = useState(8);
  const lastDaysHandler = (lastDay: number) => {
    setLastDays(lastDay);
  };
  useEffect(() => {
    getByCountries({ country: path })
      .then((response) => response.data)
      .then((json: getByCountryType) => setCovidData(json))
      .catch((e) => console.log(e));
    getHistorical({ country: path, lastdays: lastDays })
      .then((response) => response.data)
      .then((json: getHistoricalType) => {
        setHistoricCase(json.timeline.cases);
        setHistoricDeath(json.timeline.deaths);
      })
      .catch((e) => console.log(e));
  }, [lastDays, path]);
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };
  const todayString = today.year + '년 ' + today.month + '월 ' + today.date + '일';
  const thisCountry = countryData.filter((v) => v.code === path)[0];
  return (
    <div className="container">
      <Seo title="Korea" />
      <div className="page">
        <h2 className="countryName">{thisCountry.kName + ' (' + thisCountry.eName + ')'}</h2>
        <h3>{todayString}</h3>
        <CardContainer data={covidData} />
        <div className="chartContainer">
          <ChartRange lastDays={lastDays} lastDaysHandler={lastDaysHandler} />
          <ChartBar title="확진자수" chartData={historicCase} color="rgba(255, 99, 132, 0.5)" />
          <ChartBar title="사망자수" chartData={historicDeath} color="rgba(254, 213, 150, 0.5)" />
        </div>
      </div>
      <style jsx>{`
        .chartContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container {
          margin-top: 30px;
        }
        .countryName {
          color: #11cdef;
        }
      `}</style>
    </div>
  );
};

export default DashBoard;
