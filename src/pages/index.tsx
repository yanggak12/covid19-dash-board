import { useEffect, useState } from 'react';
import CardContainer from '../components/CardContainer';
import Seo from '../components/Seo';
import getByCountries from '../containers/getByCountries';
import { getByCountryType } from '../utils/types';

const Home: React.VFC = () => {
  const [covidData, setCovidData] = useState<getByCountryType>();
  useEffect(() => {
    getByCountries({ country: 'kr' })
      .then((response) => setCovidData(response.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(covidData);
  return (
    <div>
      <Seo title="Home" />
      <div className="page">
        <h2>COVID-19 대시보드</h2>
        <CardContainer data={covidData} />
      </div>
    </div>
  );
};

export default Home;
