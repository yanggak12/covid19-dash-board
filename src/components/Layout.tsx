import React from 'react';
import NavBar from './NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="container">
        <NavBar />
        <div>{children}</div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Layout;
