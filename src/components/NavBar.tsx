import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DropdownMenu from './DropdownMenu';

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className="home">
          <Image src="/monit-logo-blue.png" className="logo" width={30} height={30} />
          <h3 id="title">COVID-19 Dashboard</h3>
        </a>
      </Link>
      <div className={router.pathname === '/' ? 'inactive' : 'dropdown'}>
        <DropdownMenu />
      </div>

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
        .inactive {
          display: none;
        }
        .dropdown {
        }
        a {
          text-decoration: none;
        }
        .home {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dropdown {
          color: 'blue';
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
