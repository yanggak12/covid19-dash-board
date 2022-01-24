import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import logo from '../assets/img/monit-logo.png';
import logoFill from '../assets/img/monit-logo-blue.png';

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a>
          <Image src={router.pathname === '/' ? logoFill : logo} width={50} height={50} />
        </a>
      </Link>
      <Link href="/neighbor">
        <a className={router.pathname === '/neighbor' ? 'active' : ''}>
          <h1>이웃나라 상황보기</h1>
        </a>
      </Link>
      <style jsx>{`
        nav {
          width: 80%;
          display: flex;
          align-self: center;
          align-items: center;
          justify-content: space-between;
          //justify-content: center;
        }
        a {
          text-decoration: none;
          padding: 0 10px;
        }
        a :hover {
          color: skyblue;
        }
        .active {
          color: #11cdef;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
