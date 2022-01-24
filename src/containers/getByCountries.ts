import axios from 'axios';

interface inputType {
  country: string;
}

const getByCountries = async ({ country }: inputType) => {
  return await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
};

export default getByCountries;
