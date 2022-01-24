import CardContainer from '../components/CardContainer';
import Seo from '../components/Seo';

const Home = () => {
  return (
    <div>
      <Seo title="Home" />
      <div className="page">
        <h2>COVID-19 대시보드</h2>
        <CardContainer data="temp" />
      </div>
    </div>
  );
};

export default Home;
