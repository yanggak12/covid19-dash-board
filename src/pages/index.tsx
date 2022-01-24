import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';

const Home = () => {
  const router = useRouter();
  //   useEffect(() => {
  //     setTimeout(() => router.replace('/korea'), 1000);
  //   }, []);

  return (
    <div>
      <Seo title="Home" />
      <div className="page">
        <div className="index">
          <Image src="/monit-logo-blue" width={40} height={40} />
        </div>
      </div>
      <style jsx>{`
        .index {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70vw;
        }
      `}</style>
    </div>
  );
};
export default Home;
