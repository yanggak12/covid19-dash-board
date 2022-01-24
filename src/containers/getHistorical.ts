import axios from 'axios';

interface inputType {
  country: string;
  lastdays: number;
}

const getHistorical = async ({ country, lastdays }: inputType) => {
  return await axios.get(
    `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${lastdays}`,
  );
};

export default getHistorical;
