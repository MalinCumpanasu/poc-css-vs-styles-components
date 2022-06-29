import "../styles/globals.css";
import "../styles/scss/bookshelf.scss";
import "../styles/sass/bookone.sass";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
