import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import '../../styles/globals.css';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
