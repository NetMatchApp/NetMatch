import { AppProps } from 'next/app';
import Hola from './hola';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
