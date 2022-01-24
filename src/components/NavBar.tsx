import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className="home">
          <Image
            src={router.pathname === '/' ? '/monit-logo-blue.png' : '/monit-logo.png'}
            className="logo"
            width={30}
            height={30}
          />
          <h3 id="title">COVID-19 Dashboard</h3>
        </a>
      </Link>
      <Link href="/neighbor">
        <a className={router.pathname === '/neighbor' ? 'active' : 'inactive'}>
          <h3 className="neighbor">이웃나라 상황</h3>
        </a>
      </Link>
      <style jsx>{`
        nav {
          width: 80%;
          display: flex;
          align-self: center;
          align-items: center;
          justify-content: space-between;
        }
        #title {
          margin: 0 0 0 10px;
        }
        a {
          text-decoration: none;
        }
        .home {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .inactive :hover {
          opacity: 0.5;
        }
        .active {
          color: #11cdef;
        }
        .neighbor {
          padding: 5px;
          border: 0.2rem solid;
          border-radius: 0.5rem;
        }
        @media (max-width: 700px) {
          .neighbor {
            font-size: 15px;
            border: 0.1rem solid;
            border-radius: 0.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
