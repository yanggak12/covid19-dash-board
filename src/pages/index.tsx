import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import { countryData } from '../utils/countryInfo';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();
  const [visibleLogo, setVisibleLogo] = useState(true);
  setTimeout(() => setVisibleLogo(false), 1000);

  return (
    <div>
      <Seo title="Home" />
      <div className="page">
        {visibleLogo ? (
          <div className="index">
            <Image src="/monit-logo-blue.png" className="logo" width={100} height={100} />
            <h1>COVID-19 DASH BOARD</h1>
          </div>
        ) : (
          <div>
            {countryData.map((val, idx) => (
              <div className="itemContainer" key={idx}>
                <Link href={`/country/${val.code}`}>
                  <a className="item">
                    <h2>{val.eName}</h2>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 70vh;
        }
        .index {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation-duration: 1s;
          animation-name: fadeout;
        }

        .item {
          text-align: center;
        }
        .item :hover {
          color: #11cdef;
        }

        @keyframes fadeout {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
export default Home;
